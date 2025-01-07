import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {

    const navLinks = [
        {path: '/', title: "Home"},
        {path: '/collection', title: "Collection"},
        {path: '/testimonials', title: "Testimonials"},
        {path: 'mailto:rodrigofb06@gmail.com', title: "Contact"},
    ]

  return (
    <nav className={`${containerStyles}`}>
        {navLinks.map(link => (
                <NavLink to={link.path} key={link.title} className={({isActive}) => `${isActive ? 'active-link' : ''} px-3 py-2 rounded-full `} >{link.title}</NavLink>
            )
        )}
    </nav>
  )
}

export default Navbar