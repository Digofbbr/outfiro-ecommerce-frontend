import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Testimonials from "./pages/Testimonials"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import { ToastContainer } from 'react-toastify';
import PlaceOrder from "./pages/PlaceOrder"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Favorites from "./pages/Favorites"

 
const App = () => {
  return (
    <main className="overflow-hidden text-[#404040]">
      <ToastContainer />
      <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/place-order" element={<PlaceOrder />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
  )
}

export default App  