import classNames from "classnames/bind"
import styles from "./Cart.module.scss"
import { Link } from "react-router-dom"

import {BsArrowRight} from 'react-icons/bs'
import { useContext } from "react"
import { CartContext } from "../../store/CartProvider"
const cx = classNames.bind(styles)

const Cart = () => {

  const { state, removeFromCart, increaseQuantity, decreaseQuantity, calculateCartTotal } = useContext(CartContext);
  const { cartItems } = state;



  return (
    <div className={cx('wrapper')}>
    <div className={cx('container')}>
        <div className={cx('title')}>
          <h2>Your Cart:</h2>
            <Link className={cx('navLink')} to="/shop">
              Countinue Shop
              <span className={cx('arowLeft')}><BsArrowRight/></span>
            </Link>
        </div>

        {cartItems.length > 0 ? (
          <div className={cx('table')}>
            <div className={cx('titles')}>
              <h3 className={cx('productTitle')}>Product</h3>
              <h3 className={cx('price')}>Price</h3>
              <h3 className={cx('quantity')}>Quantity</h3>
            </div>

            <div className={cx('cartItems')}>  
              {cartItems.map(item => (
                <div key={item.id} className={cx('cartItem')}>
                  <div className={cx('cartProduct')}>
                      <img className={cx('images')} src={item.images} alt=""/>
                      <div>
                          <h3 className={cx('name')}>{item.name}</h3>
                      </div>
                  </div>
                  <div className={cx('cartProductPrice')}>${item.price}</div>
                  <div className={cx('cartProductQuantity')}>
                        <button className={cx('btn')} onClick={() => decreaseQuantity(item)}>-</button>
                        <div className={cx('count')}>{item.quantity}</div>
                        <button className={cx('btn')} onClick={() => increaseQuantity(item)}>+</button>
                  </div>
                   
                  <button className={cx('btnRemove')} onClick={() => removeFromCart(item)}>Remove</button>
                  
                </div>
              ))}
            </div>

            <div className={cx('cartSummary')}>
              <div className={cx('cartCheckout')}>
                <div className={cx('subtotal')}>
                  <span>Subtotal</span>
                  <span className={cx('amount')}>${calculateCartTotal()}</span>
                </div>
                <Link to="/checkout"> <button className={cx('btnCheckOut')}>Check out</button></Link>
              </div>
            </div>
          </div>
        ) : (<p className={cx('warning')}>Item is already added to your cart</p>)}
    </div>
  </div>
  )
}

export default Cart