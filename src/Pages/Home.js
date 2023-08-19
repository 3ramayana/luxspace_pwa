import Arrived from '../Components/Arrived';
import Browse from '../Components/Browse';
import Clients from '../Components/Clients';
import Hero from '../Components/Hero';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AsideMenu from '../Components/AsideMenu';
import Splash from './Splash';

const Home = ({ items, isLoading, cart }) => {
  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <>
          <Header mode="light" cart={cart} />
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
};

export default Home;
