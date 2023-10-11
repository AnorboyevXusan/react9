import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RequireAuth from './components/RequireAuth'
import Category from "./pages/category/Category.jsx";
import Login from "./pages/login/Login.jsx";
import Header from "./components/header/Header.jsx";
import Product from "./pages/product/Product.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<RequireAuth/>}>
            <Route path='/category' element={<Category />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
