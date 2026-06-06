import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Shuffle.css';

/**
 * Shuffle text animation component.
 * Each character is wrapped in an overflow-hidden container.
 * On animate, a strip of duplicate chars slides through the container,
 * creating a "slot machine" rolling effect.
 */
const Shuffle = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'up',
  duration = 0.35,
  ease = 'power3.out',
  tag: Tag = 'span',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 2,
  animationMode = 'evenodd',
  stagger = 0.03,
  triggerOnHover = true,
}) => {
  const containerRef = useRef(null);
  const stateRef = useRef({ tl: null, playing: false, mounted: false });

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !text) return;
    const s = stateRef.current;
    s.mounted = true;

    // ---- Grab gradient styles before we touch innerHTML ----
    const cs = getComputedStyle(el);
    const isGradient = cs.backgroundClip === 'text' || cs.webkitBackgroundClip === 'text';
    const gradientCSS = isGradient ? {
      background: cs.backgroundImage,
      backgroundSize: cs.backgroundSize,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    } : null;

    // ---- Build word / char DOM ----
    function buildChars() {
      el.innerHTML = '';
      const chars = [];
      text.split(/(\s+)/).forEach(tok => {
        if (/^\s+$/.test(tok)) {
          const sp = document.createElement('span');
          sp.className = 'shuffle-word';
          sp.style.cssText = 'display:inline;white-space:pre;';
          sp.textContent = tok;
          el.appendChild(sp);
        } else {
          const w = document.createElement('span');
          w.className = 'shuffle-word';
          w.style.display = 'inline';
          [...tok].forEach(c => {
            const ch = document.createElement('span');
            ch.className = 'shuffle-char';
            ch.style.display = 'inline-block';
            ch.textContent = c;
            if (gradientCSS) Object.assign(ch.style, gradientCSS);
            w.appendChild(ch);
            chars.push(ch);
          });
          el.appendChild(w);
        }
      });
      return chars;
    }

    // ---- Wrap + animate ----
    function animate(chars) {
      if (s.tl) { s.tl.kill(); s.tl = null; }
      s.playing = true;

      const isVert = shuffleDirection === 'up' || shuffleDirection === 'down';
      const rolls = Math.max(1, shuffleTimes);
      const totalSlots = rolls + 2; // first copy + rolls clones + original
      const clips = [];

      chars.forEach(ch => {
        const parent = ch.parentElement;
        if (!parent) return;

        // Measure BEFORE wrapping
        const r = ch.getBoundingClientRect();
        const cw = r.width;
        const ch_ = r.height;
        if (!cw || !ch_) return;

        // Create clip container (shows exactly 1 char)
        const clip = document.createElement('span');
        clip.style.cssText = `
          display:inline-block;
          overflow:hidden;
          vertical-align:top;
          width:${cw}px;
          height:${ch_}px;
          line-height:${ch_}px;
        `;

        // Create strip that holds all copies stacked vertically
        const strip = document.createElement('span');
        strip.style.cssText = `
          display:block;
          will-change:transform;
        `;

        // Build slot copies:  [copy0] [clone1] ... [cloneN] [original]
        const makeSlot = (txt) => {
          const s = document.createElement('span');
          s.className = 'shuffle-char';
          s.style.cssText = `display:block;width:${cw}px;height:${ch_}px;line-height:${ch_}px;text-align:center;`;
          s.textContent = txt;
          if (gradientCSS) Object.assign(s.style, gradientCSS);
          return s;
        };

        const letter = ch.textContent;
        // First visible copy
        strip.appendChild(makeSlot(letter));
        // Roll clones
        for (let k = 0; k < rolls; k++) {
          strip.appendChild(makeSlot(letter));
        }
        // Original (final position)
        const orig = makeSlot(letter);
        orig.dataset.orig = '1';
        strip.appendChild(orig);

        // Insert clip in place of char
        parent.insertBefore(clip, ch);
        parent.removeChild(ch);
        clip.appendChild(strip);

        // For "up": start at y=0, end at y = -(totalSlots-1)*ch_
        // For "down": start at y = -(totalSlots-1)*ch_, end at y = 0
        const dist = (totalSlots - 1) * ch_;
        let fromY, toY;
        if (shuffleDirection === 'up') { fromY = 0; toY = -dist; }
        else { fromY = -dist; toY = 0; }

        gsap.set(strip, { y: fromY, force3D: true });
        strip._toY = toY;

        clips.push({ clip, strip, origSlot: orig, charWidth: cw, charHeight: ch_ });
      });

      // Build GSAP timeline
      const strips = clips.map(c => c.strip);
      if (!strips.length) { s.playing = false; return; }

      const tl = gsap.timeline({
        onComplete: () => {
          s.playing = false;
          s.tl = null;
          // Simplify: replace each clip with just the original char text
          clips.forEach(({ clip, origSlot, charWidth, charHeight }) => {
            const simple = document.createElement('span');
            simple.className = 'shuffle-char';
            simple.style.cssText = `
              display:inline-block;
              width:${charWidth}px;
              height:${charHeight}px;
              line-height:${charHeight}px;
              text-align:center;
            `;
            simple.textContent = origSlot.textContent;
            if (gradientCSS) Object.assign(simple.style, gradientCSS);
            clip.parentNode?.insertBefore(simple, clip);
            clip.parentNode?.removeChild(clip);
          });
          onShuffleComplete?.();
        },
      });

      const tweenVars = {
        y: (_i, t) => t._toY,
        duration,
        ease,
        force3D: true,
        stagger: animationMode === 'evenodd' ? stagger : 0,
      };

      if (animationMode === 'evenodd' && strips.length > 1) {
        const odd = strips.filter((_, i) => i % 2 === 1);
        const even = strips.filter((_, i) => i % 2 === 0);
        if (odd.length) tl.to(odd, { ...tweenVars }, 0);
        const delay = odd.length
          ? (duration + Math.max(0, odd.length - 1) * stagger) * 0.7
          : 0;
        if (even.length) tl.to(even, { ...tweenVars }, delay);
      } else {
        tl.to(strips, tweenVars, 0);
      }

      s.tl = tl;
    }

    // ---- Run full cycle ----
    function run() {
      const chars = buildChars();
      // Wait 2 frames for layout to settle, then wrap + animate
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!s.mounted) return;
          animate(chars);
        });
      });
    }

    // Initial text (visible before animation kicks in)
    el.textContent = text;

    // Delay initial animation to let Framer Motion parent transitions start
    const timeoutId = setTimeout(() => {
      if (!s.mounted) return;
      run();
    }, 500);

    // Hover handler
    const onHover = () => {
      if (s.playing || !triggerOnHover) return;
      run();
    };
    if (triggerOnHover) el.addEventListener('mouseenter', onHover);

    return () => {
      s.mounted = false;
      clearTimeout(timeoutId);
      if (s.tl) { s.tl.kill(); s.tl = null; }
      s.playing = false;
      if (triggerOnHover) el.removeEventListener('mouseenter', onHover);
      el.textContent = text;
    };
  }, [text, shuffleDirection, duration, ease, shuffleTimes, animationMode, stagger, triggerOnHover, onShuffleComplete]);

  return (
    <Tag
      ref={containerRef}
      className={`shuffle-parent ${className}`}
      style={{ textAlign, ...style }}
    />
  );
};

export default Shuffle;
