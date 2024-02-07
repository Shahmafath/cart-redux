import React, { useEffect } from 'react'
import {Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts, onNavigateNext, onNavigatePrevious } from '../redux/slices/productSlice'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import Header from '../components/Header'

function Home() {

    const dispatch = useDispatch()
    const {loading, products, error, productPerPage, currentPage} = useSelector((state) => state.productSlice )
    const {wishlist} = useSelector((state) => state.wishlistSlice)

    const totalPages = Math.ceil(products?.length/productPerPage)
    const indexOfLastItem = currentPage * productPerPage
    const indexOfFirstItem = indexOfLastItem - productPerPage
    const visibleCards = products?.slice(indexOfFirstItem, indexOfLastItem)
    
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

    const navigatePrevious = () => {
        if(currentPage!=1){
            dispatch(onNavigatePrevious())
        }
    }

    const navigateNext = () => {
        if(currentPage!=totalPages){
            dispatch(onNavigateNext())
        }
    }

    return (
        <>
        <Header insideHome/>
            <div style={{ marginTop: '60px' }}>
                {
                    !loading&&error?
                    <div className="mt-5 text-center text-dark fw-bolder">
                        {error}
                    </div>:
                    null
                }
                {
                   loading? 
                   <div className='d-flex justify-content-center mt-5'>
                        <Spinner className='me-3' animation='border' variant='dark' />
                    </div>:
    
                   <Row className='mt-5 container'>
    
                  { 
                    products.length>0?visibleCards.map((product, index) => (
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
                    )):
    
                    !error&&
                        <div className="mt-5 text-center text-dark fw-bolder">Product not found!</div>
                  }
                   
                   <div className="d-flex justify-content-center align-items-center">
                        <span onClick={navigatePrevious} className='btn btn-link'>
                            <i className='fa-solid fa-angles-left fw-bolder'></i>
                        </span>
                        <span> {currentPage} of {totalPages} </span>
                        <span onClick={navigateNext} className='btn btn-link'>
                            <i className='fa-solid fa-angles-right fw-bolder'></i>
                        </span>
                   </div>
                   </Row>
    
                }
    
              
            </div>
        </>
       
    )
}

export default Home