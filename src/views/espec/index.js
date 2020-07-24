import React from 'react'

import { Container, DivGeneric } from '../style.js'
import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import { Section } from './style'

export default function Espec() {
  return (
    <DivGeneric>
      <Header />
      <Container>
        <Section>
          <h2>Especificações Técnicas</h2>
            <table>
              <caption>Tabela Técnica do Google Glass Mar/2013</caption>
              <tbody>
                <tr><td>Tela</td><td>Resolução equivalente a tela de 25"</td></tr>
                <tr><td>camera</td><td>5MP para fotos / 720p para vídeos</td></tr>
                <tr><td>conectividade</td><td> Wi-Fi/ Bluetooth</td></tr>
                <tr><td>Memoria Interna</td><td> 12GB</td></tr>
              </tbody>
            </table>
          </Section>
        <Footer />
      </Container>
    </DivGeneric>
    
  )
}