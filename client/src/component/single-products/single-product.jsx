import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context/products-context";
import { CartContext } from "../context/cart-context";
import { isInCart } from "../../helpers";
import Layout from "../shared/layout";
import "./single-product.styles.scss";

const SingleProduct = () => {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addProduct, cartItems, increase } = useContext(CartContext);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    if (!product) {
      return navigate("/shop");
    }
    setProduct(product);
  }, [id, product, navigate, products]);

  if (!product) {
    return null;
  }
  const { imgUrl, title, price, des } = product;
  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imgUrl} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-title">
           <h3>{title}</h3>
          </div>
          <div className="name-price">
            <p>${price}</p>
          </div>
          <div className="product-des">
            <p>{des}</p>
          </div>
          <div className="add-to-cart-btns">
            {cartItems && isInCart(product, cartItems) ? (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                onClick={() => increase(product)}
              >
                ADD MORE
              </button>
            ) : (
              <button
                className="button is-black nomad-btn"
                onClick={() => addProduct(product)}
              >
                ADD TO CART
              </button>
            )}
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
