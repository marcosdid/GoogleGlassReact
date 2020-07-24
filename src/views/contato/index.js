import React from 'react'

import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import { Container, DivGeneric } from '../style.js'
import { Section } from './style'

export default function Contato() {
  return (
    <DivGeneric>
      <Header />
      <Container>
        <Section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum, excepturi incidunt similique magnam vitae delectus hic reiciendis. Consequatur unde quidem voluptatem dicta, ducimus accusamus earum suscipit excepturi consectetur numquam?</p>
        </Section>
        <Footer />
      </Container>
    </DivGeneric>
  )
}