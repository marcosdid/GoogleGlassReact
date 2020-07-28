import React from 'react'

import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import { Container, DivGeneric } from '../style.js'
import { SectionStyle, DivFormStyle, FormStyle } from './style'

import imgGlass from '../../assents/pngegg.png'

export default function Contato() {
  return (
    <DivGeneric>
      <Header />
      <Container>
        <SectionStyle imgGlass={imgGlass}>
          <DivFormStyle>
            <h1>Contate-nos!!</h1>
            <p>Nos informe seus dados e entraremos em contato</p>
            <FormStyle>
              <input placeholder="Nome" type="text" name="Name" id="userName"/>
              <input placeholder="Email" type="text" name="Email" id="userEmail"/>
              <input placeholder="Mensagem" type="text" name="Mensagem" id="userMensagem"/>
              <button type="submit">Enviar</button>
            </FormStyle>
          </DivFormStyle>
        </SectionStyle>
        <Footer />
      </Container>
    </DivGeneric>
  )
}