import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Home, Products, SingleProduct, Cart } from "./pages"
import "swiper/css/bundle";
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="products/:brand" element={<Products />}></Route>
            <Route path="product/:id" element={<SingleProduct />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
