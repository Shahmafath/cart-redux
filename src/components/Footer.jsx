import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-primary text-light mt-5' style={{width: '100%', height: '300px'}}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
      <div className="website" style={{width: '400px'}}>
        <h4>
          <i style={{height: '25px'}} class="fa-solid fa-truck-fast me-2"></i>
          E Cart
        </h4>
        <h6> Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
        <h6>Code licensed Luminar, docs CC BY 3.0.</h6><br />
        <span>Currently v1.0.0.</span>
      </div>
      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}><a >Home</a></Link>
        <Link to={'/cart'}  style={{textDecoration: 'none', color: 'white'}}><a>Cart</a></Link>
        <Link to={'/wishlist'}  style={{textDecoration: 'none', color: 'white'}}><a >Wishlist</a></Link>
      </div>
      <div className="guides d-flex flex-column">
      <h4>Guides</h4>
        <a className='text-decoration-none' style={{color: 'white'}} href="https://react.dev/" target='_blank'>React</a>
        <a className='text-decoration-none' style={{color: 'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
        <a className='text-decoration-none' style={{color: 'white'}} href="https://www.w3schools.com/react/react_router.asp" target='_blank'>Routing</a>
      </div>
      <div className="contact">
        <h4>Contact Us</h4>
        <div className="d-flex">
          <input placeholder='Enter Your Mail!' type="text" className="form-control" />
          <button className="btn btn-outline-light  ms-2" ><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="icons mt-3 d-flex justify-content-between">
        <i style={{height: '40px'}} class="fa-solid fa-envelope fa-2x "></i>
        <i style={{height: '40px'}} class="fa-brands fa-twitter fa-2x"></i>
        <i style={{height: '40px'}} class="fa-brands fa-github fa-2x"></i>
        <i style={{height: '40px'}} class="fa-brands fa-facebook fa-2x"></i>
        <i style={{height: '40px'}} class="fa-brands fa-instagram fa-2x"></i>
        <i style={{height: '40px'}} class="fa-brands fa-linkedin fa-2x"></i>
        </div>
      </div>
    </div>
    <p className='text-center mt-3'>Copyright &copy; 2023 E Cart. Built with Redux.</p>
 </div>
  )
}

export default Footer