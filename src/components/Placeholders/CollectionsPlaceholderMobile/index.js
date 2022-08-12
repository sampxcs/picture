import React from 'react'
import ContentLoader from 'react-content-loader'

const CollectionsPlaceholderMobile = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'200'}
    viewBox='0 0 100% 200'
    backgroundColor='#c7c7c7'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='5%' y='4' rx='2' ry='2' width='100' height='10' />
    <rect x='5%' y='18' rx='2' ry='2' width='140' height='10' />
    <rect x='4%' y='35' rx='10' ry='10' width='60%' height='150' />
    <rect x='68%' y='35' rx='10' ry='10' width='60%' height='150' />
  </ContentLoader>
)

export default CollectionsPlaceholderMobile
