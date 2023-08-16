import logo from '../images/content/logo.png';

const Splash = () => {
  return (
    <section className="container mx-auto min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full md:w-4/12 text-center">
          <img src={logo} alt="logo" className="mx-auto mb-8" />
          <p className="mb-16 px-14">We have quality furniture</p>
        </div>
      </div>
    </section>
  );
};

export default Splash;
