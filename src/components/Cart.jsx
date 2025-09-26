import { useEffect, useState } from "react";
import useCart from "../context/useCart";
import Style from "../styles/Cart.module.css";
import { Trash2, X, Minus, Plus } from "lucide-react";

function Cart() {
  const { cart, add, remove, reset, visible, setVisible, checkout } = useCart();
  const money = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
  const [subtotal, setSubtotal] = useState(0);
  useEffect(
    () =>
      setSubtotal(
        cart.reduce((a, item) => (a += item.precio * item.cantidad), 0)
      ),
    [cart]
  );
  return (
    <aside className={`${Style.cart} ${visible ? Style.activeCart : ""}`}>
      <header>
        <h3>Carrito</h3>
        <form>
          <button type="button" onClick={() => reset()}>
            <Trash2 />
          </button>
          <button type="button" onClick={() => setVisible((visible) => false)}>
            <X />
          </button>
        </form>
      </header>
      {cart.length > 0 && (
        <ul>
          {cart.map((producto) => (
            <li key={producto.id}>
              <picture>
                <img src={producto.imagen} />
              </picture>
              <dl>
                <dt>{producto.nombre}</dt>
                <dd>{money.format(producto.precio)}</dd>
              </dl>
              <form>
                <button type="button" onClick={() => remove(producto)}>
                  <Minus />
                </button>
                <output>{producto.cantidad}</output>
                <button type="button" onClick={() => add(producto)}>
                  <Plus />
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
      <footer>
        <form>
          <fieldset>
            <label htmlFor="">Subtotal: </label>
            <output>{money.format(subtotal)}</output>
          </fieldset>
          <fieldset>
            <button type="button" onClick={() => checkout()}>
              Realizar pedido
            </button>
          </fieldset>
        </form>
      </footer>
    </aside>
  );
}

export default Cart;
