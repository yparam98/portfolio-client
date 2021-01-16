import { useRef, useLayoutEffect } from 'react'

// see if DOM ready and window context exists
const isBrowser = typeof window !== `undefined`

// function to get scroll position
function getScrollPosition({ element, useWindow }) {
    if (!isBrowser) return { x: 0, y: 0 }

    const target = element ? element.current : document.body
    const position = target.getBoundingClientRect()

    // if run in browser, else return x:0/y:0
    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top }
}

// hook
export function useScrollPosition(effect, deps, element, useWindow, wait) {
    // store current pos coordinates
    const position = useRef(getScrollPosition({ useWindow }))

    let throttleTimeout = null

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow })
        effect({ prevPos: position.current, currPos })
        position.current = currPos
        throttleTimeout = null
    }

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait)
                }
            } else {
                callBack()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, deps)
}
