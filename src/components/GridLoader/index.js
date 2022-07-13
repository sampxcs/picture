import React from 'react'
import ContentLoader from 'react-content-loader'

const GridLoader = props => {
  return (
    <ContentLoader viewBox="0 0 820 450" width={'100%'} backgroundColor={'#dddddd'} {...props}>
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  )
}

GridLoader.metadata = {
  name: 'baptiste fkt',
  github: 'baptistefkt',
  description: 'Three column grid layout',
  filename: 'Grid',
}

export default GridLoader