import styled from 'styled-components'

export const ContainerProduto = styled.div`
  height: 80%;
  width: 100%;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProdutoLarge = styled.div`
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

export const ProdutoSmall = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
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
