import './Cart.css'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext)
  const navigate = useNavigate()
  const handleCheckOut = () => {
    setTotal(0)
    addToCart([])
  }

  const handleGoHome = () => {
    navigate('/dogs')
  }

  return (
    <section className='cart-container'>
      <div className="cart-header">Check Out</div>
      <div className="cart-items">
          {myCart.slice(1).map((item) => (
            <div className="cart-items">
                <img className='cart-item-img' src={item.imageUrl} alt="" />
                {item.name} - {item.price}$
            </div>
          ))}
          <div className="cart-total">Total: $ {total}</div>
          <button className='cart-checkout' onClick={handleCheckOut}>DONE</button>
          <button className='cart-gohome' onClick={handleGoHome}>Go back Dogs</button>
      </div>
    </section>
  )
}

export default Cart