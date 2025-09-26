import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MobileProvider } from "./context/useMobile";
import { CategoryProvider } from "./context/useCategory";
import { CartProvider } from "./context/useCart";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MobileProvider>
      <CategoryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoryProvider>
    </MobileProvider>
  </StrictMode>
);
