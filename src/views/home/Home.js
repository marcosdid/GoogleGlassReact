import React from 'react'

import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import YtVideo from '../../components/YtVideo'

import { Section, Article, Aside } from './style'
import { Container } from '../style.js'

import ImgArticlePrincipal from '../../assents/google-glass-model.jpg'

function Home() {
  return (
    <div>
      <Header/>
      <Container>
        <Section>
          <Article>
            <header>
              <h1>Saiba tudo sobre o Google Glass</h1>
              <p>por Marcos Alves</p>
              <span>Atualizado em: 19/Julho/2020</span>
            </header>

            <h2>O que é</h2>
            <p>
              O Glass Enterprise Edition 2 é um dispositivo vestível que ajuda as empresas a melhorar a qualidade de sua produção e ajuda seus funcionários a
              trabalhar de maneira mais inteligente, rápida e segura. Fornece aos trabalhadores e profissionais práticos a assistência visual ativada por voz,
              projetada para ser usada o dia todo com seu perfil leve e confortável.
            </p>

            <img src={ImgArticlePrincipal} alt="Img Google glass mulher"/>

            <h2>Data de lançamento</h2>
            <p>
              Nesta segunda-feira, 20, o Google anunciou uma nova versão do Google Glass, os óculos de realidade aumentada para uso corporativo, que agora é
              classificado como um produto oficial da empresa em vez de um experimento. Chamado de Glass Enterprise Edition 2, o dispositivo se parece muito mais
              com óculos comuns e tem um novo processador da Qualcomm, uma câmera aprimorada, uma entrada USB-C para carregamento mais rápido e várias outras atualizações.
            </p>

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
            

            <h2>Como funciona</h2>
            <p>De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de LCD ou AMOLED na parte superior e em frente aos olhos do usuário.
            Com o uso de uma câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça</p>

            <h2>O que você pode fazer com o Google Glasses</h2>
            <p>O vídeo de divulgação do Google mostra que você pode se transformar em uma espécie de “super-humano”, já que o aparelho pode indicar a quantos metros você
            está de seu destino, se o metrô está aberto ou fechado, mostrar o clima, agenda e até mesmo permitir que você marque encontros apenas com comandos de voz.</p>

            <YtVideo urlVideo="https://www.youtube.com/embed/cAO7FJ3vQQo" title="Google Glass, ele está entre nós! [Análise]"/>
          </Article>

          <Aside >
            <h1>Outras Notícias</h1>
            <h2>Vídeo mais recente</h2>

            <YtVideo urlVideo="https://www.youtube.com/embed/oxELzOm0dmQ" title="Testamos o Google Glass: afinal, para que ele serve?"/>

            <h2>Novidades no Glass</h2>
            <p>O Google enfim revelou as especificações completas do Google Glass, e com ele uma surpresa ainda inédita no mercado: a gigante das buscas
            usará um sistema de áudio baseado na transdução por condução. Através das hastes dos óculos, o som será transmitido para o ouvido do usuário por
            meio de microvibrações em determinados ossos de sua cabeça, sem usar nenhum tipo de alto-falante.</p>

            <p>Além da surpresa do áudio, a tela montada a frente do olho do usuário também chamou atenção. Serão 640 x 360 pixels de resolução que,
            em proporção, equivaleria a um monitor de 25 polegadas de alta definição colocado a 2,5 metros de distância do espectador.</p>
          </Aside>
        </Section>
        <Footer/>
      </Container>
    </div>
  )
}
export default Home
