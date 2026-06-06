import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const defaultStrings = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
]

export default function TypeWriter({
  strings = defaultStrings,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
  className = '',
}) {
  const [text, setText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = strings[stringIndex]
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1))
      if (text.length === current.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
        return
      }
    } else {
      setText(current.substring(0, text.length - 1))
      if (text.length === 0) {
        setIsDeleting(false)
        setStringIndex((prev) => (prev + 1) % strings.length)
      }
    }
  }, [text, stringIndex, isDeleting, strings, pauseDuration])

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed)
    return () => clearTimeout(timeout)
  }, [tick, isDeleting, deleteSpeed, speed])

  return (
    <span className={className}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] ml-1 align-middle"
        style={{ background: 'linear-gradient(to bottom, #00f0ff, #10b981)' }}
      />
    </span>
  )
}
