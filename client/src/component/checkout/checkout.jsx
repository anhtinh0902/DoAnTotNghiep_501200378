import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context';
import Layout from '../shared/layout';
import ShippingAddress from './custom-checkout/shipping-address';
import CustomCheckout from './custom-checkout/custom-checkout';
import './checkout.styles.scss';

const Checkout = () => {
  const { itemCount, total, cartItems } = useContext(CartContext);
  const [shipping, setShipping] = useState(null);
  const addressShown = {
    display: (shipping ? 'none' : 'block')
  }
  const cardShown = {
    display: (shipping ? 'block' : 'none')
  }
  return (
    <Layout>
      <div className='checkout'>
        <h2>Thanh Toán</h2>
        <h3>{`Sản phẩm: ${itemCount}`}</h3>
        <h4>{`Tổng Giá tiền: $${total}`}</h4>
        <div style={addressShown}>
          <ShippingAddress setShipping={setShipping} />
        </div>
        <div style={cardShown}>
          <CustomCheckout { ...{ shipping, cartItems } }/>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
