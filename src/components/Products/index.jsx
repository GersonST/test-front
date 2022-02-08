import React, { useState, useEffect } from 'react'
import * as Styled from './styles'
import axios from 'axios'

function Products() {
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
  )
}

export default Products
