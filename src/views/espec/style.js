import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
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
    margin: 0px;
    text-indent: 1.5em;
  }
`

export const Table = styled.div`
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
      @media (max-width: 1235px) {
        display: block;
      }
      @media (max-width: 1200px) {
        display: grid;
      }
    }
    tr:last-child {
      border-bottom: none
    }
    td {
      padding: 1.2rem;
      width: 100%;
      display: block;
      @media (max-width: 1235px) {
        padding: 3px 0px;
      }
      @media (max-width: 1200px) {
        padding: 1.2rem;
      }
    }
    td.name {
      font-size: 1.7rem;
      font-weight: 600;
    }
    td.espec {
      font-size: 1.6rem;
      padding-left: 3.0rem;
      font-weight: 400;
      @media (max-width: 1235px) {
        padding-left: 0px
      }
      @media (max-width: 1200px) {
        padding-left: 3.0rem;
      }
    }
  }
`

export const EsquemaGlass = styled.div`
  width: 100%;
  max-width: 500px;
  display: relative;
  @media(max-width: 540px) {
    display: none;
  }
  img {
    width: 100%;
  }
  area {
    cursor: pointer;
  }
`
