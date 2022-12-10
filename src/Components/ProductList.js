import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    // console.log(props)
  return (
    <div>
        {
React.Children.toArray(props.list.map((el,i)=><ProductCard item={el} functionAlertProps={props.functionAlert} />))
        }
    </div>
  )
}

export default ProductList