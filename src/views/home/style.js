import styled from 'styled-components'

const Section = styled.section`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  h1 {
    font-size: 16pt;
    text-align: center;
  }
  h2 {
    font-size: 14pt;
    text-align: center;
  }
  p {
    text-indent: 1.5em;
  }
`

const Article = styled.article`
  max-width: ${props => props.refWindow ? '100%' : '800px'};
  padding-right: 15px;
  border-right: ${props => props.refWindow ? 'none' : '1px solid black'};
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
`

const Aside = styled.aside`
  max-width: ${props => props.refWindow ? '100%' : '400px'};
  margin-left: ${props => props.refWindow ? 'none' : '15px'};
  h1 {
    margin-top: 10px;
  }

`


export { Section, Article, Aside }