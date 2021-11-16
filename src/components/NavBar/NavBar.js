import CartWidget from "../CartWidget/CartWidget";
import './navBar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='containerMenu'>
            <ul className="menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/contact'}>Contacto</Link></li>
                <li><Link to={'/nosotros'}>Nosotros</Link></li>
                <li><Link to={'/products'}>Productos</Link></li>
                <li><Link to={'/recetas'}>Recetas</Link></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar
