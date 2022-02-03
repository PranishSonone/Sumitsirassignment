import React, { useState } from 'react';
import './All.css'
import Products from './Product';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const Myproduct = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };
  return (
    <div>
    <div className="App">
    <header>
      <button onClick={() => navigateTo(PAGE_CART)}>
        Go to Cart ({getCartTotal()})
      </button>

      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
        View Products
      </button>
    </header>
    {page === PAGE_PRODUCTS && (
      <Products cart={cart} setCart={setCart} />
    )}
  
    {page === PAGE_CART && (
      <Cart cart={cart} setCart={setCart} />
    )}
  </div>
);
}

    </div>
  )
}

export default Myproduct
