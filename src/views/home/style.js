import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  
`

export const Article = styled.article`
  max-width: 65%;
  padding-right: 40px;
  border-right: 2px solid rgb(220,220,220);
  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0px;
    border-right: none;
  }
  header {
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
    padding: 0px 30px;
  }

`

export const Aside = styled.aside`
  max-width: 35%;
  padding-left: 40px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0px;
  }
`