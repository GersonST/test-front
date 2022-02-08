import React, { useState, useEffect } from 'react'
import * as Styled from './styled'
import axios from 'axios'

function Cart() {
  const [product, setProduct] = useState([])
  const [price, setPrice] = useState('')

  useEffect(() => {
    const GetApi = async () => {
      await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((response) => {
        console.log(response.data)
        setProduct(response.data.items)
        setPrice(response.data)
      })
    }
    GetApi()
  }, [])

  return (
    <Styled.Container>
      <Styled.Produtos>Produtos</Styled.Produtos>
      <Styled.ContainerProduto>
        {product.map((prod) => {
          return (
            <Styled.Produto key={prod.product.sku}>
              <img src={prod.product.imageObjects[0].thumbnail} />
              <span>{prod.product.name}</span>

              <h3>R$ {prod.product.priceSpecification.originalPrice}</h3>
            </Styled.Produto>
          )
        })}
      </Styled.ContainerProduto>
      <Styled.ContainerTotal>
        <div>
          <h2>PRODUTOS</h2>
          <h2>R$ {price.subTotal}</h2>
        </div>
        <div>
          <h2>FRETE</h2>
          <h2>R$ {price.shippingTotal}</h2>
        </div>
        <div>
          <span>DESCONTO</span>
          <h2>R$ - {price.discount}</h2>
        </div>

        <div>
          <h2>TOTAL</h2>
          <h2>R$ {price.total}</h2>
        </div>
      </Styled.ContainerTotal>
      <Styled.Button>
        <a href="/payment">Seguir para o Pagamento</a>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Cart
