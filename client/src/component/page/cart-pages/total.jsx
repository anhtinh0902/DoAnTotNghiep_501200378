import React from 'react';
import { useNavigate } from 'react-router-dom';

const Total = ({ itemCount, total, history, clearCart }) => {
  const navigate = useNavigate();
  return (
    <div className='total-container'>
      <h3>Thông tin đơn hàng</h3>
      <div className='total'>
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className='checkout'>
        <button 
          className='button is-black'  onClick={() => navigate('/checkout')}
          >Thanh Toán</button>
        <button className='button is-white' onClick={() => clearCart()}>Xóa tất cả</button>  
      </div>
    </div>
  );
}

export default Total;
