import React, { useState, useEffect } from 'react';
import CartWidget from './CartWidget';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ totalItems, cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navBarStyle = {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: '100%',
    transition: 'opacity 1s',
    backgroundColor: isScrolled || location.pathname.includes('/catalogo/producto/') ? 'black' : 'rgba(255, 255, 255, 0)',
  };

  const brandStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    paddingLeft: '1rem',
    color: 'white',
    textDecoration: 'none',
  };

  const menuStyle = {
    marginTop: '1rem',
  };

  const menuItemStyle = {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    color: 'white',
  };

  return (
    <div className="navbar z-50" style={navBarStyle}>
      <div className="navbar-start z-50">
        <div className="flex items-center space-x-4">
          <Link to="/" style={brandStyle}>
            Coffee and Chill
          </Link>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleMenuToggle}
            >

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
    
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}
              style={menuStyle}
            >
              <li style={menuItemStyle}><Link to="/">Inicio</Link></li>
              <li style={menuItemStyle}>
                <details>
                  <summary>Catalogo</summary>
                  <ul className="p-2">
                    <li><Link to="/catalogo/producto">Cafes</Link></li>
                  </ul>
                </details>
              </li>
              <li style={menuItemStyle}>
                <details>
                  <summary>Imagenes</summary>
                  <ul className="p-2">
                    <li><Link to="/Gallery">Galeria</Link></li>
                  </ul>
                </details>
              </li>
              <li style={menuItemStyle}>
                <details>
                  <summary>Opiniones</summary>
                  <ul className="p-2">
                    <li><Link to="/Clientes">Clientes</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
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
        <CartWidget totalItems={totalItems} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default NavBar;
