import { createContext, useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";

const Cart = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const list = localStorage.getItem("zodiaco-carrito");
    if (list) return JSON.parse(list);
    return [];
  });
  const [visible, setVisible] = useState(false);
  useEffect(
    () => localStorage.setItem("zodiaco-carrito", JSON.stringify(cart)),
    [cart]
  );
  const add = (producto) => {
    if (cart.length == 0) {
      setCart((cart) => [...cart, { ...producto, cantidad: 1 }]);
      return;
    }
    if (cart.find((itemCart) => itemCart.id == producto.id)) {
      setCart((cart) =>
        cart.map((itemCart) => {
          if (itemCart.id == producto.id) {
            return { ...itemCart, cantidad: itemCart.cantidad + 1 };
          }
          return itemCart;
        })
      );
      return;
    }

    setCart((cart) => [...cart, { ...producto, cantidad: 1 }]);
    return;
  };
  const remove = (producto) => {
    if (cart.find((itemCart) => itemCart.id == producto.id)) {
      setCart((cart) =>
        cart
          .map((itemCart) => {
            if (itemCart.id == producto.id) {
              return { ...itemCart, cantidad: itemCart.cantidad - 1 };
            }
            return itemCart;
          })
          .filter((itemCart) => itemCart.cantidad > 0)
      );
      return;
    }
  };
  const reset = async () => {
    const confirm = await Swal.fire({
      title: "Vas a vaciar tu carrito, ¿estás seguro?",
      text: "Esta acción es irreversible",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    });
    if (confirm.isConfirmed) return setCart([]);
  };
  const checkout = async () => {
    const confirm = await Swal.fire({
      title: "¿Desea finalizar su pedido?",
      text: "",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ir al pago",
    });
    if (confirm.isConfirmed) return setCart([]);
  };
  return (
    <Cart.Provider value={{ cart, add, remove, reset, visible, setVisible, checkout }}>
      {children}
    </Cart.Provider>
  );
};

const useCart = () => useContext(Cart);

export default useCart;
