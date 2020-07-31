import {useEffect, useCallback, useState} from 'react'

const useHasScrolled = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const scrolled = useCallback(() => {
    const scroll = document.documentElement.scrollTop
    scroll > 1 ? setHasScrolled(true) : setHasScrolled(false)
  }, [])

  useEffect(() => {
    window.addEventListener('onscroll', scrolled)
    return () => {
      window.removeEventListener('onscroll', scrolled)
    } 
  })

  return hasScrolled
}

export default useHasScrolled