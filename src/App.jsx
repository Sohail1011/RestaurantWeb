import ButtonChange from "./components/ButtonChange";
import Navbar from "./components/Navbar";
import michael from './assets/img/Frame.svg';
import Snacks from "./components/Snacks";
import Footer from "./components/Footer";
import Better from "./components/Better";

export default function App() {
  return <>
    <Navbar />
    <article className="container">
      <section className="column1">
        <h1>Get your <span>snacks</span> <br /> Delivery at your <br /> Doorstep</h1>
        <p>Download the app get our ice cream, snacks, <br /> drinks, pastries van in ~10 minutes.</p>
        <div className="buttons-options">
          <ButtonChange text="Order Now" />
          <ButtonChange text="How it's work" />
        </div>
      </section>
      <section className="column2">
        <img src={michael} alt="Michael" />
      </section>
    </article>
    <article className="description">
      <Snacks />
    </article>
    <Better />
    <Footer />
  </>;
}