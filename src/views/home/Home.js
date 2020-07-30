import React from 'react'

import Header from '../../components/header/NavBar'
import Footer from '../../components/Footer'
import YtVideo from '../../components/YtVideo'
import Social from '../../components/Social'

import { Section, Article, Aside } from './style'
import { Container, DivGeneric } from '../style.js'

import ImgArticlePrincipal from '../../assents/google-glass-model.jpg'
import ComoGoogleGlassFunciona from '../../assents/como-google-glass-funciona.jpg'

function Home() {
  return (
    <DivGeneric>
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
            <h2>Como funciona</h2>
            <p>
              De acordo com a produção de Missfeldt, as hastes do Google Glass vão abrigar a bateria do aparelho e também vão ter o papel de “segurar” a CPU, as entradas para fones
              e microfones, além da câmera e do prisma — esses componentes vão ficar em uma espécie de caixa branca, do lado direito do seu rosto.
            </p>
            <img src={ComoGoogleGlassFunciona} alt="Como Google Glass Funciona" className="imgGoogleGlass"/>
            <p>
              Para que as imagens possam ser vistas por você, o Glass vai trabalhar com um miniprojetor, o qual vai “jogar” as imagens em um prisma, que, por sua vez, as transmitem
              diretamente para a sua retina. Dessa maneira, você vai conseguir enxergar as camadas produzidas pelo produto e a paisagem à sua volta.
            </p>
            <p>
              Além disso, você vai poder colocar as camadas de imagens emitidas pelo Glass em diferentes posições e, para isso, basta movimentar o aparelho. No entanto, a novidade ainda tem um
              desafio: fazer com que o prisma emita as imagens com qualidade, mesmo que uma lente com grau esteja entre ele e o olho da pessoa.
            </p>
            <h2>O que você pode fazer com o Google Glasses</h2>
            <p>O vídeo de divulgação do Google mostra que você pode se transformar em uma espécie de “super-humano”, já que o aparelho pode indicar a quantos metros você
            está de seu destino, se o metrô está aberto ou fechado, mostrar o clima, agenda e até mesmo permitir que você marque encontros apenas com comandos de voz.</p>
            <YtVideo urlVideo="https://www.youtube.com/embed/cAO7FJ3vQQo" title="Google Glass, ele está entre nós! [Análise]"/>
          </Article>
          <Aside >
            <h1>Outras Notícias</h1>
            <h2>Vídeo mais recente</h2>
            <YtVideo urlVideo="https://www.youtube.com/embed/5IK-zU51MU4" title="Glass Enterprise Edition 2"/>
            <h2>Novidades no Glass</h2>
            <p>
              A terceira geração do vestível Google Glass foi anunciada trazendo maior duração de bateria, sistema operacional Android e especificações mais potentes.
              O produto se chama Glass Enterprise Edition 2 e, como seu nome sugere, traz o mesmo foco no mercado empresarial que o modelo anterior tinha.
            </p>
            <p>
              Por ser projetado em cima do mesmo sistema operacional da maioria dos smartphones, o novo óculos inteligente deverá ser mais amigável para os desenvolvedores.
              O produto inclusive pode ser incluído no gerenciamento de dispositivos corporativo do Android, facilitando o controle por parte do departamento de Tecnologia da 
              Informação (TI).
            </p>
          </Aside>
        </Section>
        <Footer/>
      </Container>
      <Social />
    </DivGeneric>
  )
}
export default Home
