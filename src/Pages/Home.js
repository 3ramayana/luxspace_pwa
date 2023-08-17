import Arrived from '../Components/Arrived';
import Browse from '../Components/Browse';
import Clients from '../Components/Clients';
import Hero from '../Components/Hero';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AsideMenu from '../Components/AsideMenu';

const Home = ({ items }) => {
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
};

export default Home;
