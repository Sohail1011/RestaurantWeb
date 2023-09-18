import ButtonChange from './ButtonChange';
import './Navbar.css';

function Navbar() {

    const list = ['Home', 'About us', 'Menu', 'Our Stores', 'Contact Us '];

    return (
        <nav className="navigation">
            <h2>Streetreats</h2>
            <ul className='items'>
                <li>{list[0]}</li>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
                <li>{list[4]}</li>
            </ul>
            <ButtonChange text="Login" />
        </nav>
    )
}

export default Navbar;