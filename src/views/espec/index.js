import React, { useState } from 'react'

import { Container, DivGeneric } from '../style.js'
import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import Camera from '../../components/glassEsquema/camera'
import Gadgets from '../../components/glassEsquema/gadgets'
import Sensores from '../../components/glassEsquema/sensores'
import Vidro from '../../components/glassEsquema/vidro'
import { Section, Table, EsquemaGlass } from './style'

import glassEsquema from '../../assents/glass-esquema-marcado.jpg'

export default function Espec() {
  const [esquema, setEsquema] = useState()
  //const [coodsEsquema, setCoodsEsquema] = useState('desktop')

  /*const coods = {
    desktop: {
      vidro: [179,202,270,260],
      camera: [ 158,243,12 ],
      gadgets: [76,51,12],
      sensores: [28,143,83,216,84,249,27,169],
    },
    mobile: {
      vidro: [101,147,136,143],
      camera: [89, 137, 10],
      gadgets: [43,29,10],
      sensores: [16,8347,121,47,142,16,95]
    }
  }*/

  return (
    <DivGeneric>
      <Header />
      <Container>
        <Section>
          <EsquemaGlass>
            <h2>Clique nas areas destacadas em vermelho</h2>
            <img
              src={glassEsquema}
              useMap='#mapa-Google-Glass'
              alt='Esquema do oculos google glass'
            />
            <map name='mapa-Google-Glass'>
              <area
                shape='rect'
                coords='179,202,270,260'
                onClick={() => setEsquema(Vidro)}
                alt='Descrição Vidro'
              />
              <area
                shape='circle'
                coords='158,243,12'
                onClick={() => setEsquema(Camera)}
                alt='Descrição Camera'
              />
              <area
                shape='circle'
                coords='76,51,12'
                onClick={() => setEsquema(Gadgets)}
                alt='Descrição Gadgets'
              />
              <area
                shape='poly'
                coords='28,143,83,216,84,249,27,169'
                onClick={() => setEsquema(Sensores)}
                alt='Descrição Sensores'
              />
            </map>
            <div className='janela' name='janela'>
              {esquema}
            </div>
          </EsquemaGlass>
          <Table>
            <h2>Tabela Técnica do Google Glass </h2>
            <table>
              <caption>
                Tabela Técnica do Google Glass <span>julh/2020</span>
              </caption>
              <tbody>
                <tr>
                  <td className='name'>SoC</td>
                  <td className='espec'>Qualcomm Quad Core, 1.7GHz, 10nm</td>
                </tr>
                <tr>
                  <td className='name'>OS</td>
                  <td className='espec'>Android Oreo</td>
                </tr>
                <tr>
                  <td className='name'>Armazenamento de memória</td>
                  <td className='espec'>Flash eMMC de 3 GB LPDDR4 / 32 GB</td>
                </tr>
                <tr>
                  <td className='name'>Wi-fi</td>
                  <td className='espec'>Antena 802.11ac, banda dupla, única</td>
                </tr>
                <tr>
                  <td className='name'>Bluetooth</td>
                  <td className='espec'>AoA Bluetooth 5.x</td>
                </tr>
                <tr>
                  <td className='name'>Câmera</td>
                  <td className='espec'>8Mp, 80 DFOV</td>
                </tr>
                <tr>
                  <td className='name'>Exibição</td>
                  <td className='espec'>Módulo de visor óptico de 640x360</td>
                </tr>
                <tr>
                  <td className='name'>Saída de áudio</td>
                  <td className='espec'>
                    Alto-falante mono, áudio USB, áudio BT
                  </td>
                </tr>
                <tr>
                  <td className='name'>Microfones</td>
                  <td className='espec'>3 microfones formadores de feixe</td>
                </tr>
                <tr>
                  <td className='name'>Dados e carregamento</td>
                  <td className='espec'>USB Tipo C, USB 2.0 480Mbps</td>
                </tr>
                <tr>
                  <td className='name'>LED</td>
                  <td className='espec'>
                    Privacidade (câmera), energia (traseira)
                  </td>
                </tr>
                <tr>
                  <td className='name'>Bateria</td>
                  <td className='espec'>820mAh com carga rápida</td>
                </tr>
                <tr>
                  <td className='name'>IMU</td>
                  <td className='espec'>
                    Accel / Gyro simples de 6 eixos, Mag simples de 3 eixos
                  </td>
                </tr>
                <tr>
                  <td className='name'>Robustez</td>
                  <td className='espec'>Resistente à água e poeira</td>
                </tr>
                <tr>
                  <td className='name'>Peso</td>
                  <td className='espec'>~ 46g (pod)</td>
                </tr>
              </tbody>
            </table>
          </Table>
        </Section>
        <Footer />
      </Container>
    </DivGeneric>
  )
}
