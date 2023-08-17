import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Create restAPI
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://bwacharity.fly.dev/items');
        setItems([...response.data.nodes]);
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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isLoading={isLoading} items={items} />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
