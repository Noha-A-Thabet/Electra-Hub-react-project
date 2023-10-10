import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from './Pages/HomePage'
import SignIn from "./Pages/SignIn";
import WhishList from './Pages/WhishList';
import Cart from './Pages/Cart'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<HomePage />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="whishList" element={<WhishList />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
