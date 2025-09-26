import { useState, useEffect } from "react";
import useCart from "../context/useCart";
import Style from "../styles/Recommended.module.css";
import { Link } from "react-router";

const Recommended = () => {
  const [productos, setProductos] = useState([]);
  const [cargar, setCargar] = useState(false);
  const { add } = useCart();
  useEffect(() => {
    async function load() {
      setCargar(true);
      try {
        const respuesta = await fetch("/data.json");
        if (!respuesta.ok) throw new Error("Productos no encontrados");
        const datos = await respuesta.json();
        const agua = datos
          .filter(({ categoria }) => categoria == "Agua")
          .sort((a, b) => b.precio - a.precio)
          .find((_, i) => i == 0);
        const aire = datos
          .filter(({ categoria }) => categoria == "Aire")
          .sort((a, b) => b.precio - a.precio)
          .find((_, i) => i == 0);
        const fuego = datos
          .filter(({ categoria }) => categoria == "Fuego")
          .sort((a, b) => b.precio - a.precio)
          .find((_, i) => i == 0);
        const tierra = datos
          .filter(({ categoria }) => categoria == "Tierra")
          .sort((a, b) => b.precio - a.precio)
          .find((_, i) => i == 0);
        setProductos([agua, aire, fuego, tierra]);
        return datos;
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setCargar(false);
      }
    }
    load();
  }, []);

  const money = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

  return (
    <section id={Style.recomendados}>
      <h2>Destacados del zodíaco</h2>
      {!cargar && productos.length > 0 && (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <picture>
                <img src={producto.imagen} />
              </picture>
              <span>{producto.categoria}</span>
              <dl>
                <dt>Producto</dt>
                <dd className={Style.nombre}>{producto.nombre}</dd>
                <dt>Precio</dt>
                <dd className={Style.precio}>
                  {money.format(producto.precio)}
                </dd>
                <dt>Acción</dt>
                <dd>
                  <form>
                    <button type="button" onClick={() => add(producto)}>
                      Agregar al carrito
                    </button>
                  </form>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
      <Link to={"/productos"}>Descubrí nuestro universo de sabores</Link>
    </section>
  );
};

export default Recommended;
