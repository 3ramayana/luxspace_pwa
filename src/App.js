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

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          'https://fake-json-luxspace.vercel.app/items'
        );
        setItems([...response.data]);
      } catch (error) {}
    };

    // const loadCarousel = () => {
    // TODO: Calling carousel.js after rendering image
    //   const script = document.createElement('script');
    //   script.src = './carousel.js';
    //   script.async = false;
    //   document.body.appendChild(script);
    // };

    fetchItems();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleAddToCart = (item) => {
    const currentIndex = cart.length;
    const newCart = [...cart, { id: currentIndex + 1, item }];
    setCart(newCart);
    console.log(cart);
  };

  const handleRemoveFromCart = (id) => {
    const revisedCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(revisedCart);
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
