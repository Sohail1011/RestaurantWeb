import './Snacks.css';

export default function Snacks() {
    return (
        <>
            <span>What We Serve</span>
            <h2>Your Favorite Snacks <br /> Delivery Partner</h2>
            <div className="table">
                <div className="item">
                    <box-icon name='bowl-rice' size="lg"></box-icon>
                    <h3>Unique product range</h3>
                    <p>We are always the most exciting <br /> products to our unique range in to your asks.</p>
                </div>
                <div className="item">
                    <box-icon type='solid' name='coffee-togo' size='lg'></box-icon>
                    <h3>Delivered to your door</h3>
                    <p>Choose whatever you want and we'll deliver it to <br /> your front door across all US postcodes.</p>
                </div>
                <div className="item">
                    <box-icon type='solid' name='award' size='lg'></box-icon>
                    <h3>Better with every purchase</h3>
                    <p>We champion products that are better for you, <br /> better for the world and, above all else, delicious.</p>
                </div>
            </div>
        </>
    )
}
