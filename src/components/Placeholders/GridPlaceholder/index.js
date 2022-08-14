import React from 'react'
import ContentLoader from 'react-content-loader'

const GridPlaceholderDesktop = (props) => {
  return (
    <ContentLoader viewBox='0 0 100% 100vh' width={'100%'} height={'100vh'} backgroundColor={'#dddddd'} {...props}>
      <rect x='30' y='0' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(30% + 50px)' y='0' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(60% + 70px)' y='0' rx='5' ry='5' width='30%' height='250' />
      <rect x='30' y='270' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(30% + 50px)' y='270' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(60% + 70px)' y='270' rx='5' ry='5' width='30%' height='250' />
      <rect x='30' y='540' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(30% + 50px)' y='540' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(60% + 70px)' y='540' rx='5' ry='5' width='30%' height='250' />
      <rect x='30' y='810' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(30% + 50px)' y='810' rx='5' ry='5' width='30%' height='250' />
      <rect x='calc(60% + 70px)' y='810' rx='5' ry='5' width='30%' height='250' />
    </ContentLoader>
  )
}

const GridPlaceholderMobile = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox='0 0 300 600'
    backgroundColor='#efefef'
    foregroundColor='#fcfbfb'
    {...props}
  >
    <rect x='0' y='9' rx='0' ry='0' width='100%' height='153' />
    <rect x='0' y='173' rx='0' ry='0' width='100%' height='153' />
    <rect x='0' y='337' rx='0' ry='0' width='100%' height='153' />
    <rect x='0' y='501' rx='0' ry='0' width='100%' height='153' />
  </ContentLoader>
)
const GridPlaceholder = window.innerWidth < 660 ? GridPlaceholderMobile : GridPlaceholderDesktop

export default GridPlaceholder
