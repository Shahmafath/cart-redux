import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'

function Wishlist() {

    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlistSlice.wishlist)

  return (
    <div style={{ marginTop: '60px' }}>
    <Row className='mt-5 container'>
        {
        wishlist?.length>0?wishlist?.map(product => (
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
               <Link to={`/view/${product.id}`}> <Card.Img style={{height: '180px'}} variant="top" src={product.thumbnail} /></Link>
                <Card.Body>
                    <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <Button onClick={() => dispatch(removeFromWishlist(product.id))} variant="btn btn-outline-light fs-5">
                            <i className='fa-solid fa-heart-circle-xmark text-danger'></i>
                        </Button>
                        <Button variant="btn btn-outline-light fs-5">
                            <i className='fa-solid fa-cart-plus text-warning'></i>    
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            </Col> 
        )):
            <div className="text-center">
                <img width={'30%'} height={'300px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
                <h1 className='mt-3'>Your Wishlist is empty!</h1>
            </div>
        }
    </Row>
</div>  )
}

export default Wishlist