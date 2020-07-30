import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.9rem;
    text-align: center;
  }
  p {
    text-indent: 1.5em;
  }
`

export const AlbumFotosStyle = styled.div`
  
  .slider {
    width: 100%;
    @media (max-width: 764px) {
      height: 100%;
    }
  }
`

export const ImgStyle = styled.img`
  padding: 0px 5px;
  width: 100%;
  height: auto;
`
