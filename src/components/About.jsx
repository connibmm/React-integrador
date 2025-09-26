import React from 'react'
import { Link } from 'react-router'
import Style from "../styles/About.module.css"

const About = () => {
  return (
    <section id={Style.about}>
      <article>
        <h2>Galaxia Zodíaco</h2>
        <p>Descubrí las constelaciones que rigen nuestros valores.</p>
      </article>
            <Link to={"/nosotros"}>Leer más...</Link>
    </section>
  )
}

export default About
