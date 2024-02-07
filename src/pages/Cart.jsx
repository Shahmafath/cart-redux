import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeFromCart } from '../redux/slices/cartSlice'
import Header from '../components/Header'
function Cart() {
  const dispatch = useDispatch()
  // redirect from one page to another page by using useNavigate()
  const navigate = useNavigate() 
  const cart = useSelector(state => state.cartReducer)

  const [cartAmount, setCartAmount] = useState(0)

  useEffect(() => {
    if(cart?.length>0){
      setCartAmount(cart?.map(product => product?.totalPrice).reduce((p1,p2) => p1+p2))
    }else{
      setCartAmount(0)
    }
  }, [cart])

  const handleCheckout = () => {
    alert(" Your order has successfully placed. Thankyou for purchasing with us! ")
    dispatch(emptyCart())
    navigate('/')
  }

  const handleDecrementCart = (product) => {
    if(product.quantity==1){
      dispatch(removeFromCart(product.id))
    }else{
      dispatch(decQuantity(product))
    }
  }

  return (
    <>
      <Header/>
      <div className='container mt-5'>
       {
        cart?.length>0?
          <div className="row mt-5">
          <div className="col-lg-8">
            <h3 className='mt-5 '>Cart Summery</h3>
            <table className='table shadow mt-3'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {  
              cart?.map((product, index) => (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td>
                  <img style={{height: '60px', width: '60px'}} src={product.thumbnail} alt="" />
                </td>
                <td> 
                  <div className='d-flex'>
                    <button onClick={() => handleDecrementCart(product)} className='btn fw-bolder'>-</button>
                    <input type="text" className='form-control' style={{width: '40px'}} value={product.quantity} readOnly />
                    <button onClick={() => dispatch(incQuantity(product))} className='btn fw-bolder'>+</button>
                  </div>
                </td>
                <td>$ {product.totalPrice}</td>
                <td> 
                  <button onClick={() => dispatch(removeFromCart(product.id))} className='btn'>
                    <i className='fa-solid fa-trash text-danger'></i>
                  </button>
                </td>
              </tr>
              ))
              }
              </tbody>
            </table>
            <div className="float-end">
              <button onClick={() => dispatch(emptyCart())} className='btn btn-info me-3'>Empty Cart</button>
              <Link to={'/'} className='btn btn-warning'> Shop More</Link>
            </div>
          </div>
  
          <div className="col-lg-4 mt-5">
              <div className="shadow border rounded p-4 ">
                <h5> Total Product:
                  <span className='fw-bolder'> {cart?.length} </span>
                </h5>
                <h3>
                  Total Amount:
                  <span className='fw-bolder text-danger'>
                    $ {cartAmount}
                  </span>
                </h3>
                <hr />
                <div className="d-grid">
                  <button onClick={handleCheckout} className='btn btn-dark'> Checkout</button>
                </div>
              </div>
          </div>
          </div>:
          <div className="text-center mt-5">
            <img width={'30%'} height={'300px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
            <h1 className='mt-3'>Your Cart is empty!</h1>
            <Link to={'/'} className='btn btn-dark'>Click here to shop more</Link>
          </div>
        }
      </div>
    </>
   
  )
}

export default Cart