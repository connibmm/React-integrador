import React from 'react'
import Style from "../styles/Footer.module.css"
import { AtSign, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer id={Style.footer}>
      <ul>
        <li>
          <Phone/>
          <span>1146719823</span>
        </li>
        <li>
          <AtSign/>
          <span>zodiacoburgers@gmail.com</span>
        </li>
                <li>
          <MapPin/>
          <span>Av. 3 N°3701</span>
        </li>
      </ul>
      <p>&copy; Zodíaco Burgers | 2025 | Conni Morales</p>
    </footer>
  )
}

export default Footer
