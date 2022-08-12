import React from 'react'
import ContentLoader from 'react-content-loader'

const CollectionsPlaceholder = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'250'}
    viewBox='0 0 100% 250'
    backgroundColor='#c7c7c7'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='3%' y='4' rx='2' ry='2' width='100' height='10' />
    <rect x='3%' y='18' rx='2' ry='2' width='140' height='10' />
    <rect x='2%' y='35' rx='10' ry='10' width='40%' height='250' />
    <rect x='44%' y='35' rx='10' ry='10' width='40%' height='250' />
    <rect x='86%' y='35' rx='10' ry='10' width='40%' height='250' />
  </ContentLoader>
)

export default CollectionsPlaceholder
