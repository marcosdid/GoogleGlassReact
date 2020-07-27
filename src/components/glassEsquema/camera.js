import React from 'react'
import styled from 'styled-components'

const Scamera = styled.div`
  h3 {
    text-align: center;
    font-size: 1.8rem
  }
`
const Camera = () => {
  return (
    <Scamera>
      <h3>Camera</h3>
      <p>
        A câmera do Glass consegue gravar vídeos em alta definição, com 720p de resolução. As fotos também são muito boas. Um ponto interessante
        do uso desta câmera, é que por ela estar bem próxima aos olhos do usuário, as imagens capitadas são exatamente do mesmo ponto de vista da
        pessoa que está usando o Glass, a sensação é a mesma proporcionada quando você assiste a um vídeo de Battlefield nele, você se sente dentro do game.
      </p>
    </Scamera>
  )
}

export default Camera