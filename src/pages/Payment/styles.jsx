import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    color: #999;
    font-family: 'Helvetica Neue';
    font-size: 14px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 17px;
  }
`

export const Form = styled.form`
  height: 279px;
  width: 340px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 10px;

  input {
    padding: 10px;
    box-sizing: border-box;
    height: 45px;
    width: 320px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  label {
    height: 14px;
    width: 129.71px;
    color: #ccc;
    font-family: 'Helvetica Neue';
    font-size: 12px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 14px;
    padding: 10px;
  }
`

export const ContainerTotal = styled.div`
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #ccc;

  h2 {
    height: 17px;
    width: 124px;
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
