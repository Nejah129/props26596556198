import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = ({item,functionAlertProps}) => {
    // console.log(functionAlertProps)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.pic} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>functionAlertProps(item)}>Info</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard