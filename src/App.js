import Header from './Components/Header';
import Hero from './Components/Hero';
import Browse from './Components/Browse';
import Arrived from './Components/Arrived';
import Clients from './Components/Clients';
import AsideMenu from './Components/AsideMenu';
import Footer from './Components/Footer';
import Splash from './Pages/Splash';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://bwacharity.fly.dev/items');
        setItems([...response.data.nodes]);
      } catch (error) {}
    };

    // const loadCarousel = () => {
    //   // TODO: Calling carousel.js after rendering image
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
      {isLoading ? (
        <Splash />
      ) : (
        <>
          <Header />
          <Hero />
          <Browse />
          <Arrived items={items} />
          <Clients />
          <AsideMenu />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
