'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

export function useAudioPlayer(audioUrl: string) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(1)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100)
    }
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const toggle = useCallback(() => {
    if (!audioUrl) return
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(prev => !prev)
  }, [audioUrl, isPlaying])

  const setVolume = useCallback((val: number) => {
    const audio = audioRef.current
    if (audio) audio.volume = val
    setVolumeState(val)
  }, [])

  const seek = useCallback((percent: number) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    audio.currentTime = (percent / 100) * duration
  }, [duration])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return {
    audioRef,
    isPlaying,
    progress,
    currentTime: formatTime(currentTime),
    duration: formatTime(duration),
    toggle,
    seek,
    volume,
    setVolume,
    isDisabled: !audioUrl,
  }
}
