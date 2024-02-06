import React, { useEffect } from 'react'
import {Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slices/productSlice'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Home() {

    const dispatch = useDispatch()
    const {loading, products, error} = useSelector((state) => state.productSlice )
    const {wishlist} = useSelector((state) => state.wishlistSlice)
    const cart = useSelector(state => state.cartReducer)
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleWishlist = (product) => {
        const existingProduct = wishlist.find(item => item.id == product.id)
        if(existingProduct){
            alert("Product already exist!!")
        }else{
            dispatch(addToWishlist(product))
        }
    }

    return (
        <div style={{ marginTop: '60px' }}>

            {
               loading? 
               <div className='d-flex justify-content-center mt-5'>
                    <Spinner className='me-3' animation='border' variant='dark' />
                </div>:

               <Row className='mt-5 container'>

              { 
                products.length>0&&products.map((product, index) => (
                    <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                   <Card className='shadow rounded' style={{ width: '18rem' }}>
                      <Link to={`/view/${product.id}`}> <Card.Img style={{height: '180px'}} variant="top" src={product.thumbnail} /></Link>
                       <Card.Body>
                           <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                           <div className='d-flex justify-content-between'>
                               <Button onClick={() => handleWishlist(product)} variant="btn btn-outline-light fs-5">
                                   <i className='fa-solid fa-heart text-danger'></i>
                               </Button>
                               <Button onClick={() => dispatch(addToCart(product))} variant="btn btn-outline-light fs-5">
                                   <i className='fa-solid fa-cart-plus text-warning'></i>    
                               </Button>
                           </div>
                       </Card.Body>
                   </Card>
                </Col>
                ))
                
              }
               
               </Row>

            }

          
        </div>
    )
}

export default Home