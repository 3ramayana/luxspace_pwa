// import { createContext, useEffect } from 'react';

// export const GlobalContext = createContext();

// export const GlobalProvider = (props) => {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     // TODO: Create restAPI
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('https://bwacharity.fly.dev/items');
//         setItems([...response.data.nodes]);
//       } catch (error) {}
//     };

//     // const loadCarousel = () => {
//     // TODO: Calling carousel.js after rendering image
//     //   const script = document.createElement('script');
//     //   script.src = './carousel.js';
//     //   script.async = false;
//     //   document.body.appendChild(script);
//     // };

//     fetchItems();

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1500);
//   }, []);

//   const handleAddToCart = (item) => {
//     const currentIndex = item.length;
//     const newCart = [...cart, { id: currentIndex + 1, item }];
//     setCart(newCart);
//   };

//   const handleRemoveFromCart = () => {};
//   return (
//     <GlobalContext.Provider
//       value={{ items, isLoading, handleAddToCart, handleRemoveFromCart }}>
//       {props.children}
//     </GlobalContext.Provider>
//   );
// };
