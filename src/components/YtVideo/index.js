import React from 'react'

import Iframe from './style'

const YtVideo = ({urlVideo, title}) => {
  return (
    <Iframe>
      <iframe
        title={title}
        src={urlVideo}
        frameBorder="0"
      />
    </Iframe>
  )
}

export default YtVideo