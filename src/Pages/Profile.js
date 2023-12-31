import { Link } from 'react-router-dom';
import AsideMenu from '../Components/AsideMenu';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Profile = ({ cart }) => {
  return (
    <>
      <Header mode="dark" cart={cart} />

      <section className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile" aria-label="current-page">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 mt-20">
                <img
                  src="./images/content/my-profile.png"
                  alt="my-profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold mb-1">Taufiq Ismail</h2>
              <p className="text-lg mb-12">React Developer</p>
            </div>
          </div>
          <ul className="max-w-full md:max-w-lg mx-auto">
            <li className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100">
              <span>Subscribe to Notification</span>
              <span>
                <label
                  htmlFor="subscribe"
                  className="relative rounded-full bg-gray-200 w-12 h-7 block cursor-pointer">
                  <input
                    id="subscribe"
                    type="checkbox"
                    className="appearance-none focus:outline-none absolute rounded-full w-5 h-5 bg-pink-400 transform -translate-y-1/2 top-1/2 left-1 checked:left-6 block transition-all duration-300 cursor-pointer"
                  />
                </label>
              </span>
            </li>
            <li className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100">
              <span>Test Notification</span>
              <button className="hover:underline appearance-none">
                Push Now
              </button>
            </li>
          </ul>
          <div className="text-center mt-12">
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>

      <AsideMenu />
      <Footer />
    </>
  );
};

export default Profile;
