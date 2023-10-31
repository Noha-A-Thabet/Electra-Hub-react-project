import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootLayout from "./Pages/RootLayout";
import HomePage from './Pages/HomePage'
import SignIn from "./Pages/SignIn";
import WhishList from './Pages/WhishList';
import Cart from './Pages/Cart'
import Mobiles from "./Components/Mobiles/Mobiles";
import Laptop from "./Components/Laptop/Laptop";
import Tablet from "./Components/Tablet/Tablet";
import SmartWatch from "./Components/SmartWatch/SmartWatch";
import Logout from "./Components/Logout/Logout"



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<HomePage />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="logout" element={<Logout />} />
      <Route path="whishList" element={<WhishList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="mobiles" element={<Mobiles />} />
      <Route path="laptops" element={<Laptop />} />
      <Route path="tablets" element={<Tablet />} />
      <Route path="watches" element={<SmartWatch />} />
    </Route>
  ))
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
