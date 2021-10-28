const styleli = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    borderRadius: '5px',
    padding: '10px',
  }

const NavBar = () => {
    return (
        <div>
            <ul style={ styleli } >
                <li style={ styleli }>Nosotros</li>
                <li style={ styleli }>Productos</li>
                <li style={ styleli }>Contacto</li>
                <li style={ styleli }>Recetas</li>
            </ul>
        </div>
    )
}

export default NavBar
