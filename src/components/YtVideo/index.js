import React from 'react'

import Iframe from './style'

const YtVideo = ({urlVideo, title}) => {
  return (
    <Iframe>
      <div>
        <iframe
          title={title}
          src={urlVideo}
          frameBorder="0"
        />
      </div>
    </Iframe>
  )
}

export default YtVideo