import CartWidget from "../CartWidget/CartWidget";
import './navBar.css';


const NavBar = () => {
    return (
        <div className='containerMenu'>
            <ul className="menu">
                <li>Contacto</li>
                <li>Nosotros</li>
                <li>Productos</li>
                <li>Recetas</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar
