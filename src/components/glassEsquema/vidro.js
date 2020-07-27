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
      <h3>Tela</h3>
      <p>
        Na parte frontal do Glass, é possível ver uma pequena tela. Dentro da tela, há um prisma, que é responsável por refletir a imagem do sistema do Glass para dentro da
        nossa retina. Assim, o prisma projeta a imagem do Glass por cima da realidade, mais fica a pergunta: a imagem criada pelo Glass não atrapalha na visão? E a resposta é: não
        ! Como a imagem do Glass é criada por cima da realidade, o usuário pode modificar o foco de sua visão. Quando o usuário quiser ver a previsão do tempo, por exemplo, ele olha
        para a lente e a imagem do Glass aparece, quando ele começa a andar, e troca o foco de sua visão, a imagem do Glass fica opaca e diminui.
      </p>
    </Scamera>
  )
}

export default Camera