import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  position: fixed;
  top: 0;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #ccc;
    padding: 10px;

    &: hover {
      color: #ff7800;
    }
  }
`
