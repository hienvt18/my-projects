import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './Dogs.css'
const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props

    const { addToCart, setTotal } = useContext(CartContext)

    const handleAddToCart = () => {
        const newItems = {
            name,
            price,
            imageUrl,
        }

        addToCart((item) => [...item, newItems])
        setTotal((total) => (total += Number(price)))
    }

    return (
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img className="dog-img" src={imageUrl} alt={name} />
                </div>
                <div className="dogs-desc">{description}</div>
                <div className="dogs-price">{price}</div>
                <button className="dogs-btn" onClick={handleAddToCart}>Add To Cart</button>
              
                
            </section>
        </>
   )
}

export default DogsCard