import styled from 'styled-components'

const Iframe = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export default Iframe