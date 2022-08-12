import React from 'react'
import ContentLoader from 'react-content-loader'

const GridPlaceholderMobile = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox='0 0 300 600'
    backgroundColor='#c7c7c7'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='9' rx='0' ry='0' width='100%' height='153' />
    <rect x='0' y='173' rx='0' ry='0' width='100%' height='153' />
    <rect x='0' y='337' rx='0' ry='0' width='100%' height='153' />
    <rect x='0' y='501' rx='0' ry='0' width='100%' height='153' />
  </ContentLoader>
)

export default GridPlaceholderMobile
