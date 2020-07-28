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
    <h3>Gadgets</h3>
    <p>
    Segundo a própria Google, o Glass virá com uma bateria que tem autonomia suficiente para durar um dia inteiro. Apenas algumas atividades como
    videoconferências e longas filmagens vão exigir um pouco mais. Além disso ele vem com WiFi, Bluetooth, 3G/4G e muito mais.
    </p>
  </Scamera>
}

export default Camera