import React from 'react'
import styled from 'styled-components'

const Scamera = styled.div`
  h3 {
    text-align: center;
    font-size: 1.8rem
  }
`
const Camera = () => {
  return <Scamera>
    <h3>Sensores</h3>
    <p>O Google Glass lá vai revelando alguns dos seus segredos a cada dia que passa, e hoje ficamos a conhecer alguns dos sensores que contém e que poderão
      potenciar aplicações no campo da realidade aumentada. Eu não chegaria ao ponto de lhes chamar sensores "secretos" como é referido, já que se trata apenas
      tipo de informação que podemos obter em qualquer smartphone actual com acelerómetros, giroscópio, e bússola digital.</p>
  </Scamera>
}

export default Camera