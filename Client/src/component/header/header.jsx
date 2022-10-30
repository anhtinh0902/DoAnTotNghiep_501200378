import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import Logo from '../../assets/logo.png'

import { auth } from '../../firebase';
import { UserContext } from '../context/user-context'
import './header.styles.scss';

const Header = () => {
  const { user } = useContext(UserContext);
  console.log('user', user);
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to='/'>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link to='/shop'>
            Sản phẩm
          </Link>
        </li>

        {
          !user && 
          <li>
            <Link to='/sign-in'>
              Đăng Nhập
            </Link>
          </li>
        }
        {
          user && 
          <li onClick={() => auth.signOut()}>
            Đăng Xuất
          </li>
        } 
        {
          !user && 
          <li>
            <Link to='/sign-up'>
              Đăng kí
            </Link>
          </li>
        }
      </ul>
      <CartIcon />
    </nav>
  );
}

export default Header;
