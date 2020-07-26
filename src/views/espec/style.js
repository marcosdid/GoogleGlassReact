import styled from 'styled-components'

const Section = styled.section`
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.9rem;
    text-align: center;
  }
  p {
    margin: 0px;
    text-indent: 1.5em;
  }
`

const Table = styled.div`
  table {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    tbody {
      width: 100%;
      max-width: 700px
    }
    caption {
      display: none
    }
    tr {
      display: grid;
      grid-template-columns: .4fr 1fr;
      border-bottom: 1px solid rgba(220,220,220, .5);
      @media (max-width: 768px) {
        display: block;
      }
    }
    td {
      font-size: 1.6rem;
      padding: 1.2rem;
      width: 100%;
      display: block;
      @media (max-width: 768px) {
        padding: 3px 0px;
      }
    }
    td.name {
      font-weight: 600;
    }
    td.espec {
      padding-left: 3.0rem;
      font-weight: 400;
      @media (max-width: 768px) {
        padding-left: 0px
      }
    }
  }
`

export { Section, Table }