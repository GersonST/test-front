import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 72px;
  width: 387px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const ItensA = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: #ccc;

  &: hover {
    color: #ff7800;
  }
`
