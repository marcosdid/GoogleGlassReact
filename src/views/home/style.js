import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
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

const Article = styled.article`
  max-width: 65%;
  padding-right: 40px;
  border-right: 2px solid black;
  border-color: rgb(220,220,220);

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0px;
    border-right: none;
  }

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
      font-size: 1.2rem;
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
  max-width: 35%;
  padding-left: 40px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0px;
  }

  h1 {
    margin-top: 10px;
  }

`


export { Section, Article, Aside }