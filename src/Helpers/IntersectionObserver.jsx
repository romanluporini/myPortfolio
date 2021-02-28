import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function useOnScreen(options) {
  const [ref, setRef] = useState()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
      setRef(entry.isIntersecting)
    }, options)

    if (ref) {
      observer.observe(ref)
    }

    return ()=>{
        if(ref){
            observer.unobserve(ref)
        }
    }
  }, [ref, options])

  return [ref, visible]
};

export default useOnScreen