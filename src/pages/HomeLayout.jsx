import "../styles/home.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Outlet className="outlet" />
        <Footer />
      </div>
    </>
  );
};
export default HomeLayout;
