import React from 'react';
import './hero.styles.scss';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate (`/shop`)
}
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="hero-title">
           Bạn muốn nổi bật hãy chọn ATTShop
          </h1>
          <div className='shop-now-btn'>
            <button className='button is-black' id='shop-now' onClick={() => handleClick() }>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;