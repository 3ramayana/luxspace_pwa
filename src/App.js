import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Pages/Details';
import Cart from './Pages/Cart';
import Showcase from './Pages/Showcase';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const cacheCart = window.localStorage.getItem('cart');

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        'https://fake-json-luxspace.vercel.app/items'
      );
      setItems([...response.data]);

      if (!document.querySelector('script[src="/carousel.js"]')) {
        const script = document.createElement('script');
        script.src = '/carousel.js';
        script.async = false;
        document.body.appendChild(script);
      }
    })();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (cacheCart !== null) {
      setCart(JSON.parse(cacheCart));
    }
  }, [cacheCart]);

  const handleAddToCart = (item) => {
    const currentIndex = cart.length;
    const newCart = [...cart, { id: currentIndex + 1, item }];
    setCart(newCart);

    window.localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleRemoveFromCart = (id) => {
    const revisedCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(revisedCart);

    window.localStorage.setItem('cart', JSON.stringify(revisedCart));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isLoading={isLoading} items={items} cart={cart} />}
          />
          <Route path="/profile" element={<Profile cart={cart} />} />
          <Route
            path="/details"
            element={<Showcase cart={cart} items={items} />}
          />
          <Route
            path="/details/:id"
            element={<Details handleAddToCart={handleAddToCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
