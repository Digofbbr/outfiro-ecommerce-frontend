import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Testimonials from "./pages/Testimonials"
import Product from "./pages/Product"

 
const App = () => {
  return (
    <main className="overflow-hidden text-[#404040]">
      <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/product/:productId" element={<Product/>} />
      </Routes>
    </main>
  )
}

export default App  