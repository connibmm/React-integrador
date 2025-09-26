import { createContext, useEffect, useState, useContext } from "react";

const Mobile = createContext(false);

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return <Mobile.Provider value={{ isMobile }}>{children}</Mobile.Provider>;
};

const useMobile = () => useContext(Mobile);

export default useMobile;
