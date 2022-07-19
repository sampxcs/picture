import React, { Suspense } from 'react'
import useNearScreen from '../../hooks/useNearScreen'

const Footer = React.lazy(() => import('./Footer'))

export default function lazyFooter() {
  const { isNearScreen, ref } = useNearScreen()

  return (
    <Suspense fallback={'CARGANDO FOOTER'}>
      <div ref={ref}>{isNearScreen && <Footer />}</div>
    </Suspense>
  )
}
