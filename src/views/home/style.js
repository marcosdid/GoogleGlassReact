import styled from 'styled-components'

const Section = styled.section`
  margin: ${props => props.refWindow ? 'none' : '10px'};
  padding: ${props => props.refWindow ? 'none' : '10px'};
  display: flex;
  flex-wrap: wrap;
  h1 {
    font-size: 25px;
    text-align: center;
  }
  h2 {
    font-size: 17px;
    text-align: center;
  }
  p {
    text-indent: 1.5em;
  }
`

const Article = styled.article`
  max-width: ${props => props.refWindow ? '100%' : '700px'};
  padding: ${props => props.refWindow ? 'none' : '40px'};
  border-right: ${props => props.refWindow ? 'none' : '2px solid black'};
  border-color: rgb(220,220,220);
  header {
    h1 {
      margin-top: 10px;
      margin-bottom: 0px;
    }
    p {
      text-align: center;
      margin: 0px;
    }
    span {
      display: block;
      text-align: right;
    }
  }

  img {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const Aside = styled.aside`
  max-width: ${props => props.refWindow ? '100%' : '370px'};
  padding: ${props => props.refWindow ? 'none' : '40px'};
  h1 {
    margin-top: 10px;
  }

`


export { Section, Article, Aside }