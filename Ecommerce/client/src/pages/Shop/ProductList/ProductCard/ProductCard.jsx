import classNames from "classnames/bind"
import styles from './ProductCard.module.scss'
import {AiFillStar} from 'react-icons/ai'
import { useContext } from "react"
import { CartContext} from '../../../../store/CartProvider'
import { toast } from 'react-toastify';
const cx = classNames.bind(styles)


const ProductCard = ({product}) => {

  const {addToCart} = useContext(CartContext)
  
  const handleAddToCart = () => {
    addToCart(product)
    toast.success('Thêm sản phẩm', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className={cx('wrapper')}>
        <img className={cx('images')} src={product.images} alt={product.name} />
        <div className={cx('content')}>
           <div className={cx('text')}>
            <h3 className={cx('name')}>{product.name}</h3>
            <p className={cx('price')}>${product.price}</p>
           </div>
            <div className={cx('rate')}>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
        </div>
        <button className={cx('btn')} onClick={handleAddToCart} > Add To Cart</button>
    </div>
  )
}

export default ProductCard