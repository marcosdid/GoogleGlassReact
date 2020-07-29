import React from 'react'
import Slider from 'infinite-react-carousel'

import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import { Container, DivGeneric } from '../style.js'
import { Section, AlbumFotosStyle, ImgStyle } from './style'
import albumFotos from './fotos'

export default function Fotos() {
  const settings = {
    centerMode: true,
    slidesPerRow: 3,
    centerPadding: 20,
  }

  return (
    <DivGeneric>
      <Header />
      <Container>
        <Section>
          <AlbumFotosStyle>
            <Slider {...settings} className='slider'>
              {albumFotos.map((foto) => {
                return (
                  <div>
                    <ImgStyle src={foto} />
                  </div>
                )
              })}
            </Slider>
          </AlbumFotosStyle>
        </Section>
        <Footer />
      </Container>
    </DivGeneric>
  )
}
