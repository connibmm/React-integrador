import { Droplet, Earth, Flame, Infinity, Wind} from "lucide-react";
import Style from "../styles/Productos.module.css"

import {useState, useEffect} from "react"
import useCategory from "../context/useCategory";
import useCart from "../context/useCart";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargar, setCargar] = useState(false);
  const [seleccionados, setSeleccionados] = useState([]);
  const {hasCategory, setCategory} = useCategory();
  const {add} = useCart();
  useEffect(() => {
    async function load () {
      setCargar(true)
      try {
        const respuesta = await fetch("/data.json")
        if (!respuesta.ok) throw new Error("Productos no encontrados")
          const datos = await respuesta.json()
        setProductos(datos)
        setSeleccionados(datos)
        return datos
      } catch (error) {
        throw new Error(error.message)
      } finally {
        setCargar(false)
      }
    }
  load()

  }, []);
  useEffect(() => {
    if (hasCategory === null) {
      setSeleccionados(productos)
      return;
    } 
    setSeleccionados(() => productos.filter(({categoria}) => hasCategory === categoria));
  }, [hasCategory, productos]);

  const money = new Intl.NumberFormat("es-AR", {style:"currency", currency:"ARS", maximumFractionDigits:0});

  return (
    <section id={Style.productos}>
      <header>
        <h1>Carta <span>zodiacal</span></h1>
        <h3>Elegí tu elemento, encontrá tu burger</h3>
      </header>
      <form id={Style.categories}>
        <fieldset>
          <input type="radio" name="categoria" id="todas" onChange={() => setCategory(null)}/>
          <label htmlFor="todas"><Infinity/><span>Todas</span></label>
        </fieldset>
        <fieldset>
          <input type="radio" name="categoria" id="agua" onChange={() => setCategory("Agua")}/>
          <label htmlFor="agua"><Droplet/><span>Agua</span></label>
        </fieldset>
        <fieldset>
          <input type="radio" name="categoria" id="aire" onChange={() => setCategory("Aire")}/>
          <label htmlFor="aire"><Wind/><span>Aire</span></label>
        </fieldset>
        <fieldset>
          <input type="radio" name="categoria" id="fuego" onChange={() => setCategory("Fuego")}/>
          <label htmlFor="fuego"><Flame/><span>Fuego</span></label>
        </fieldset>
        <fieldset>
          <input type="radio" name="categoria" id="tierra" onChange={() => setCategory("Tierra")}/>
          <label htmlFor="tierra"><Earth/><span>Tierra</span></label>
        </fieldset>
      </form>
      {!cargar && seleccionados.length > 0 && (<ul>
        {seleccionados.map((producto) => (<li key={producto.id}>
          <picture>
            <img src={producto.imagen}/>
          </picture>
          <span>{producto.categoria}</span>
          <dl>
            <dt>Producto</dt>
            <dd className={Style.nombre}>{producto.nombre}</dd>
            <dt>Descripción</dt>
            <dd className={Style.descripcion}>{producto.descripcion}</dd>
            <dt>Precio</dt>
            <dd className={Style.precio}>{money.format(producto.precio)}</dd>
          </dl>
          <form>
            <button type="button" onClick={() => add(producto)}>Agregar al carrito</button>
          </form>
        </li>))}
      </ul>)}
    </section>
  );
};

export default Productos;
