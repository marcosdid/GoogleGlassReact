import styled from 'styled-components'

export const Myheader = styled.div`
  position: fixed;
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 50px 30px;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);

  img {
    width: 170px;
    height: 40px;
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 15px 0;
  }
`
