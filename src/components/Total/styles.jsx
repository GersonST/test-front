import styled from 'styled-components'

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
