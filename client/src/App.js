import {Routes, Route } from 'react-router-dom';
import HomePage from './component/home-page';
import NotFound from './component/not-found';
import Shop from './component/page/shop/shop';
import SingleProduct from './component/single-products/single-product';
import CartPage from './component/page/cart-pages/cart-page';
import Checkout from './component/checkout/checkout';
import './App.scss';
import Canceled from './component/checkout/stripe-checkout/canceled';
import Success from './component/checkout/stripe-checkout/success';
import SignUp from './component/sign-up/sign-up';
import SignIn from './component/sign-in/sign-in';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='*' element={<NotFound />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/product/:id' element={<SingleProduct />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='canceled' element={<Canceled />} />
        <Route exact path='/success' element={<Success />} />
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route exact path='/sign-in' element={<SignIn />} />

      </Routes>
    </div>
  );
}

export default App;