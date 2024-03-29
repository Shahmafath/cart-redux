import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productSearch } from '../redux/slices/productSlice'


function Header({insideHome}) {

  const dispatch = useDispatch()
  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const wishlist = useSelector(state => state.wishlistSlice.wishlist)
  const cart = useSelector(state => state.cartReducer)

  useEffect(() => {
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  }, [wishlist, cart])
  

  return (
    <Navbar className="bg-primary position-fixed top-0 w-100 mb-5" expand="lg" style={{zIndex: '1'}}>
    <Container>
      <Navbar.Brand>
        <Link to={'/'} style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>
          <i className='fa-solid fa-truck-fast me-2'></i>
          E Cart
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           {
           insideHome&& 
              <Nav.Link className='me-lg-5'>
              <input onChange={e => dispatch(productSearch(e.target.value.toLowerCase()))} type="text" className='form-control' placeholder='Search products!' style={{width: '400px'}} />
            </Nav.Link> 
           }
            <Nav.Link className='btn border rounded'>
              <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>
                <i className='fa-solid fa-heart text-light me-2'></i>
                Wishlist
                <Badge className='ms-2 rounded' bg='light'> {wishlistCount} </Badge>
              </Link>
            </Nav.Link>

            <Nav.Link className='btn border rounded ms-5'>
              <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>
                <i className='fa-solid fa-cart-shopping text-light me-2'></i>
                Cart
                <Badge className='ms-2 rounded' bg='light'> {cartCount} </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header