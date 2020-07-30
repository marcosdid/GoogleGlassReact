import React, {useEffect, useState} from 'react'
import Slider from 'infinite-react-carousel'

import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import { Container, DivGeneric } from '../style.js'
import { Section, AlbumFotosStyle, ImgStyle } from './style'
import albumFotos from './fotos'

export default function Fotos() {
  const [slidesPerRowSettings, setSlidesPerRowSettings] = useState(3)

  useEffect(() => {
    window.addEventListener('resize', () => {
      const resize = window.innerWidth
      resize <= 1024 ? setSlidesPerRowSettings(1) : setSlidesPerRowSettings(3)
    })
  }, [])

  const settings = {
    centerMode: true,
    slidesPerRow: slidesPerRowSettings,
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
