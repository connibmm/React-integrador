import { Link } from "react-router";
import Style from "../styles/Nosotros.module.css"  

const Nosotros = () => {
  return (
    <article id={Style.nosotros}>
      <h1>Galaxia <span>Zodíaco</span></h1>
      <video src='/video/nosotros-video.mp4' autoPlay loop muted></video>
      <p>Brindamos los más altos estándares de calidad, seguridad alimentaria e higiene.</p>
      <ul>
        <li>
          <picture>
            <img src="/imagenes/nosotros1.webp" alt=""/>
          </picture>
          <dl>
            <dt>Comprometidos con un futuro próspero y sostenible</dt>
            <dd>En Zodíaco Burgers cocinamos con los pies en la Tierra y la mirada en las estrellas. Priorizamos proveedores de cercanía, ingredientes de estación y empaques reciclables o compostables. Medimos consumos, separamos residuos y reducimos plásticos día a día. Queremos que cada burger de tu signo deje una huella más liviana en el planeta.</dd>
          </dl>
        </li>
        <li>
          <picture>
            <img src="/imagenes/nosotros2.webp" alt=""/>
          </picture>
          <dl>
            <dt>Apasionados por la calidad y la transparencia</dt>
            <dd>Nuestro universo empieza con un blend 100% carne vacuna, pan brioche artesanal, vegetales frescos y salsas caseras. Cocinamos a la vista, cuidamos tiempos y temperaturas y te contamos el origen de cada ingrediente. Con nuestro programa “Cocina Abierta” podés conocer de cerca cómo preparamos tu constelación favorita.</dd>
          </dl>
        </li>
        <li>
          <picture>
            <img src="/imagenes/nosotros3.webp" alt=""/>
          </picture>
          <dl>
            <dt>Creemos en el talento de los jóvenes</dt>
            <dd>Detrás de cada burger hay una constelación de personas que brillan. Valoramos y apoyamos a nuestro equipo con capacitación, entrenamiento y oportunidades de crecimiento. Celebramos la diversidad y promovemos un ambiente inclusivo, justo y respetuoso, donde cada estrella del equipo pueda alcanzar su máximo potencial.</dd>
          </dl>
        </li>
      </ul>
      <Link to={"/productos"}>Descubrí nuestro universo de sabores</Link>
    </article>
  );
};

export default Nosotros;
