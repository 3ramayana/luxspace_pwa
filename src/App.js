import Header from './Components/Header';
import Hero from './Components/Hero';
import Browse from './Components/Browse';
import Arrived from './Components/Arrived';
import Clients from './Components/Clients';
import AsideMenu from './Components/AsideMenu';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://bwacharity.fly.dev/items');

        setItems([...response.data.nodes]);
      } catch (error) {}
    };

    fetchItems();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
