import {useEffect, useCallback, useState} from 'react'

const useHasScrolled = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const scrolled = useCallback(() => {
    const scroll = window.scrollY
    scroll > 1 ? setHasScrolled(true) : setHasScrolled(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrolled)
    return () => {
      window.removeEventListener('scroll', scrolled)
    } 
  })

  return hasScrolled
}

export default useHasScrolled