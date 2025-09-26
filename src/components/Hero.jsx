import Style from '../styles/HeroStyle.module.css'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section id={Style.hero}>
      <video id={Style.heroVideo} src='/video/hero.mp4' autoPlay loop muted></video>
      <video id={Style.heroVideoMobile} src='/video/hero-mobile.mp4' autoPlay loop muted></video>
      <article id={Style.heroContent}>
        <h2>El horóscopo dice</h2>
        <p>Hoy comés <Link to="/productos">INCREÍBLE</Link></p>
      </article>
    </section>
  )
}

export default Hero
