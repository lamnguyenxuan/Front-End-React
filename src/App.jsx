import { NavLink, Outlet } from "react-router-dom"
import { Header, Footer } from "./components";
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";

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