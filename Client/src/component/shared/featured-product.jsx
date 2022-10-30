import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { isInCart } from '../../helpers';
import { CartContext, } from '../context/cart-context';
import './featured-product.styles.scss' ;
const FeaturedProduct = (props) => {
    const { title, imgUrl, price ,id, des} = props;
    const product = { title, imgUrl, price, id, des } ;

    const navigate = useNavigate();
    const { addProduct, cartItems, increase} = useContext(CartContext);
    const handleClick = () => {
        return navigate (`/product/${id}`)
    }
   
    return (
        <div className='featured-product'>
            <div className='featured-image'  onClick={handleClick}>
                <img src={imgUrl} alt="product" />
            </div>
            <div  className='featured-body'>
            <div className='name-title'>
                <h3>{title}</h3>
            </div>
            <div className='name-price'>
                <p>$ {price}</p>
            </div>
            <div className='name-button'>

                {
                  cartItems &&  isInCart(product, cartItems)?
                  <button className='button is-white nomad-btn' id='btn-white-outline' onClick={() => increase(product)}>ADD MORE</button>
                   : <button className='button is-black nomad-btn' onClick={() => addProduct(product)}>ADD TO CART</button>
                }
            </div>
            </div>
        </div>
    );
   
}

export default FeaturedProduct;
