import styled from 'styled-components'

export const SectionStyle = styled.section`
  display: flex;
  height: 100%;
  margin-top: 40px;
  background-image: url(${props => props.imgGlass});
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: right top;
  @media (max-width: 768px) {
    background-image: none;
  }
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.9rem;
    text-align: center;
  }
  p {
    text-indent: 1.5em;
  }
`

export const DivFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  padding-top: 20px;
  @media (max-width: 768px) {
    padding-top: 5px;
    width: 100%;
  }
  h1 {
    text-align: initial;
    font-size: 3rem;
    margin: 0px 0px;
    color: #1087ff;
  }
  p {
    text-indent: 0;
    margin: 0;
    color: black;
  }
`

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  input {
    outline-style: none;
    padding: 10px 0px;
    border: none;
    border-bottom: 1px solid #acabab;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .1);
    margin: 15px 0px;
    font-size: 1.8rem;
    background-color:transparent;
  }
  button {
    border: none;
    padding: 10px 0px;
    width: 28%;
    border-radius: 20px;
    margin-top: 25px;
    font-size: 1.8rem;
    background-color: #1087ff;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .3);
    transition: all 200ms ease-in;
    transform: scale(1); 

    &:hover {
      padding: 12px;
      transition: all 200ms ease-in;
      transform: scale(1.01);
    }
  }
`