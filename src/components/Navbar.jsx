import ButtonChange from './ButtonChange';
import './Navbar.css';

function Navbar() {

    const list = ['Home', 'About us', 'Menu', 'Our Stores', 'Contact Us '];

    return (
        <nav className="navigation">
            <h2>Streetreats</h2>
            <ul className='items'>
                <li><a href="#">{list[0]}</a></li>
                <li><a href="#">{list[1]}</a></li>
                <li><a href="#">{list[2]}</a></li>
                <li><a href="#">{list[3]}</a></li>
                <li><a href="#">{list[4]}</a></li>
            </ul>
            <ButtonChange text="Login" />
        </nav>
    )
}

export default Navbar;