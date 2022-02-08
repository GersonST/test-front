import React, { useState, useEffect } from 'react'
import * as Styled from './styled'
import axios from 'axios'

function Cart() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const GetApi = async () => {
      await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((response) => {
        console.log(response.data)
        setProduct(response.data.items)
      })
    }
    GetApi()
  }, [])

  return (
    <Styled.Container>
      <Styled.Produtos>Produtos</Styled.Produtos>
      <Styled.ContainerProduto>
        <ul>
          {product.map((prod) => {
            return (
              <div key={prod.product.sku}>
                <img src={prod.product.imageObjects[0].thumbnail} />
                <li>{prod.product.name}</li>

                <h3>R$ {prod.product.priceSpecification.originalPrice}</h3>
              </div>
            )
          })}
        </ul>
      </Styled.ContainerProduto>
      <Styled.ContainerTotal>
        <h2>Produtos</h2>
        <h2>Frete</h2>
        <h2>Desconto</h2>
        <h2>Total</h2>
      </Styled.ContainerTotal>
      <Styled.Button>
        <a href="/payment">Seguir para o Pagamento</a>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Cart
