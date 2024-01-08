import React, { useState, useEffect } from 'react';
import CartWidget from './CartWidget';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeTransparent = scrollTop > 0;

      setIsScrolled(shouldBeTransparent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isItemContainer = location.pathname.includes("/catalogo/producto/");

  const navBarStyle = {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: '100%',
    transition: 'opacity 1s',
    backgroundColor: isScrolled || isItemContainer ? 'black' : 'rgba(255, 255, 255, 0)',
    // Cambia el color a negro cuando se hace scroll o cuando estás en ItemContainer
  };

  const brandStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    paddingLeft: '1rem',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div className="navbar z-50" style={navBarStyle}>
      <div className="navbar-start z-50">
        <div className="flex items-center space-x-4">
          <Link to="/" style={brandStyle}>
            Coffee and Chill
          </Link>
          <div className="dropdown">
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-10">
        <Link to="/" >
        <li className='no-underline text-white hover:bg-transparent menu menu-horizontal px-1 space-x-10'> 
            Inicio
         </li>
         </Link>
          <li className='text-white'>
            <details>
              <summary className='hover:bg-transparent no-underline text-white'>Catalogo</summary>
              <ul className="p-2">
                <li><Link to="/catalogo/producto" className='no-underline text-black hover:bg-transparent '>Cafes</Link></li>
              </ul>
            </details>
          </li>
          <li className='text-white'>
            <details>
              <summary className='hover:bg-transparent'>Imagenes</summary>
              <ul className="p-2 text-white ">
                <li><Link to="/Gallery" className='no-underline text-black hover:bg-transparent'>Galeria</Link></li>
              </ul>
            </details>
          </li>
          <li className='text-white '>
            <details >
              <summary className='hover:bg-transparent'>Opiniones</summary>
              <ul className="p-2 ">
                <li><Link to="/Clientes" className='no-underline text-black hover:bg-transparent' >Clientes</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
