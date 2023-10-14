import './Better.css';
import ButtonChange from './ButtonChange';
import Chips from '../assets/img/Frito-Chips-1-1536x1024.png';

function Better() {
    return (
        <article className="potatoes">
            <section className='autodisplay'>
                <h2>better crunch. <br /> better taste. <br /> better for you.</h2>
                <p>triple cooked for crunchier crips.</p>
                <ButtonChange text="Try it Now" />
            </section>
            <section className='yomi'>
                <img src={Chips} height={450} alt="FritoLay" />
            </section>
        </article>
    );
}
export default Better;