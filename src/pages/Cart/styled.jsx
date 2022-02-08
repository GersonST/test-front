import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Produtos = styled.h1`
  height: 17px;
  width: 319px;
  color: #999;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
`

export const ContainerProduto = styled.div`
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const ContainerTotal = styled.div`
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #ccc;

  h2 {
    color: #212122;
    font-family: 'Helvetica Neue';
    font-size: 14px;
    letter-spacing: NaNpx;
    line-height: 17px;
  }
`

export const Button = styled.button`
  height: 60px;
  width: 341px;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  a {
    height: 24px;
    width: 339px;
    color: #fff;
    font-family: 'Helvetica Neue';
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
  }
`
