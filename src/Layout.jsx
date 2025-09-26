import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router";
import Footer from "./components/Footer";
import { ChevronUp, MessageCircleMore } from "lucide-react";
import Style from "./styles/Layout.module.css"
import Cart from "./components/Cart";

const Layout = () => {
  const {pathname} = useLocation()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    })
  }
  useEffect(() => scrollToTop(), [pathname])
  return (
    <>
      <Header/>
      <Cart/>
      <Outlet/>
      <a href="https://wa.link/xeii61" target="_blank" id={Style.fab}><MessageCircleMore size={"3rem"}/></a>
      <button type="button" id={Style.up} onClick={scrollToTop}><ChevronUp size={"3rem"}/></button>
      <Footer/>
    </>
  );
};

export default Layout;
