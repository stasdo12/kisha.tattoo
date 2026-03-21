'use client'

import { useState, useEffect } from 'react'

type MediaQueryResult = {
  isMobile: boolean   // < 768px
  isTablet: boolean   // 768px – 1023px
  isDesktop: boolean  // ≥ 1024px
  width: number
}

const MOBILE_MAX = 768
const DESKTOP_MIN = 1024

export function useMediaQuery(): MediaQueryResult {
  const [state, setState] = useState<MediaQueryResult>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: 1200,
  })

  useEffect(() => {
    function update() {
      const w = window.innerWidth
      setState({
        isMobile: w < MOBILE_MAX,
        isTablet: w >= MOBILE_MAX && w < DESKTOP_MIN,
        isDesktop: w >= DESKTOP_MIN,
        width: w,
      })
    }

    update()
    const mql = window.matchMedia(`(max-width: ${DESKTOP_MIN - 1}px)`)
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  return state
}
