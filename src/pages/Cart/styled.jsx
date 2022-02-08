import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  min-width: 100%;
`

export const Produtos = styled.h1`
  color: #999;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
`

export const ContainerProduto = styled.div`
  height: 80%;
  width: 60%;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Produto = styled.div`
  height: 90%;
  width: 70%;
  box-sizing: border-box;

  border-radius: 3px;
  border: 1px solid #eee;
  display: inline-block;
  padding: 10px;
  margin: 10px;

  h3 {
    color: #212122;
    font-family: 'Helvetica Neue';
    font-size: 13px;
    letter-spacing: NaNpx;
    line-height: 16px;
  }
  span {
    color: #212122;
    font-family: 'Helvetica Neue';
    font-size: 13px;
    letter-spacing: NaNpx;
    line-height: 16px;
  }

  img {
    height: 65px;
    width: 65px;
  }
`

export const ContainerTotal = styled.div`
  box-sizing: border-box;
  height: 70%;
  width: 70%;
  border-radius: 3px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    height: 70%;
    width: 70%;

    h2 {
      color: #212122;
      font-family: 'Helvetica Neue';
      font-size: 14px;
      letter-spacing: NaNpx;
      line-height: 17px;
    }
    span {
      color: #ff6c00;
      font-family: 'Helvetica Neue';
      font-size: 14px;
      letter-spacing: NaNpx;
      line-height: 17px;
    }
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
