import { useEffect, useState } from "react";
import useMobile from "../context/useMobile";
import useCart from "../context/useCart";
import { Link } from "react-router";
import { ShoppingCart, Menu, X, Trash2, Minus, Plus } from "lucide-react";
import HeaderStyle from "../styles/HeaderStyle.module.css";
import { useLocation } from "react-router";

const Header = () => {
  const { isMobile } = useMobile(); // me traigo la información del useMobile
  const { setVisible, cart, visible, reset, checkout } = useCart();
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <>
      <header id={HeaderStyle.mainHeader}>
        <Link to="/" id={HeaderStyle.brand}>
          Zodíaco Burgers
        </Link>
        {!isMobile && (
          <nav className={`${HeaderStyle.desktopNavbar}`}>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        )}
        {isMobile && (
          <nav
            className={`${HeaderStyle.mobileNavbar} ${
              open ? HeaderStyle.active : ""
            }`}
          >
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        )}
        <form className={HeaderStyle.actions}>
          <button
            type="button"
            className={HeaderStyle.btnCart}
            onClick={() => setVisible((visible) => !visible)}
          >
            <ShoppingCart />
          </button>
          {isMobile && (
            <button
              type="button"
              className={HeaderStyle.btnCart}
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </button>
          )}
        </form>
      </header>
    </>
  );
};

export default Header;
