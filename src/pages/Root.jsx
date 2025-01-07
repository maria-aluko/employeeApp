import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root;