import styled from 'styled-components'

export const SocialStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: ${props => props.refHeader ? 'fixed' : 'absolute'};
  top: ${props => props.refHeader ? '70px' : '85px'};
  left: 80px;
  width: 32px;
  height: 115px;
  transition: 0.3s;
  @media (max-width: 900px) {
    left: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const ImgSocialStyle = styled.img`
  width: 32px;
  height: 32px;
`
