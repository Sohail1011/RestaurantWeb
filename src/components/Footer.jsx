import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <article className="feet">
                <div>
                    <h2>Streetreats</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum deleniti blanditiis optio rem reiciendis est eligendi fuga voluptates dolore laboriosam repellendus tempora repudiandae praesentium, eveniet nesciunt incidunt aperiam itaque!</p>
                </div>
                <div>
                    <h3>Custome Service</h3>
                    <ul className='custom-ul'>
                        <li>Customer Service</li>
                        <li>Contact Us</li>
                        <li>Terms & Condicions</li>
                        <li>Privacy Policy</li>
                        <li>Chats & Community</li>
                    </ul>
                </div>
                <div>
                    <h3>Follow US On</h3>
                    <ul className='follow-ul'>
                        <li>Facebook</li>
                        <li>YouTube</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className='offer'>
                    <h3>Subscribe to get 10% off your first order</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <form className="options">
                        <input type="email" placeholder='Enter your Email' /><button>Subscribe</button>
                    </form>
                </div>
            </article>
            <div className="line"></div>
            <article className="piece">
                <p>&copy; 2022 Streetreats</p>
                <div className="logos">
                    <box-icon type='logo' name='visa' color='gray' size='md'></box-icon>
                    <box-icon type='logo' name='mastercard' color='gray' size='md'></box-icon>
                    <box-icon name='apple' type='logo' color='gray' size='md'></box-icon>
                </div>
            </article>
        </footer>
    )
}
