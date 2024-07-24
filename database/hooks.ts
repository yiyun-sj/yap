import { useEffect, useRef, useState } from 'react'

export const useCountdown = (): [number, (time: number) => void] => {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  const setCountdown = (time: number) => {
    setTimer(time)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) clearInterval(intervalRef.current)
        return prev - 1
      })
    }, 1000)
  }
  return [timer, setCountdown]
}

export const useLoadable = (
  func: () => Promise<void>
): [boolean, () => Promise<void>] => {
  const [isLoading, setIsLoading] = useState(false)

  const wrappedFunc = async () => {
    if (isLoading) return
    setIsLoading(true)
    await func()
    setIsLoading(false)
  }

  return [isLoading, wrappedFunc]
}
