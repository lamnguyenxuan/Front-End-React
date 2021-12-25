import { NavLink, Outlet } from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'
import ScrollToTop from "./components/Utilities/ScrollToTop";
import ScrollButton from "./components/Utilities/ScrollButton";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollButton />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;