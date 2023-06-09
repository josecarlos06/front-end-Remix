import {Link, useLocation} from "@remix-run/react";
const Navegacion = () => {
   const location = useLocation();
   return (
      <>
         <li className="navbar__li">
            <Link to="/" className={location.pathname === '/' ? 'nav__active' : ''}>Inicio</Link>
         </li>
         <li className="navbar__li">
            <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'nav__active' : ''}>Nosotros</Link>
         </li>
         <li className="navbar__li">
            <Link to="/guitarras" className={location.pathname === '/guitarras' ? 'nav__active' : ''}>Tienda</Link>
         </li>
         <li className="navbar__li">
            <Link to="/posts" className={location.pathname === '/posts' ? 'nav__active' : ''}>Blog</Link>
         </li>
         <li className="navbar__li">
            <Link to="/carrito" className={location.pathname === '/carrito' ? 'nav__active' : ''}>
               <i className='bx bx-cart-add'></i>
            </Link>
         </li>
      </>
   )
}
export default Navegacion