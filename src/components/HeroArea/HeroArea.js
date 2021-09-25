import HeroImg from '../../assets/images/hero-programmer.svg';
import Button from '../Button/Button';
import './HeroArea.style.css';

export default function HeroArea() {
    return (
        <div className="hero-section">
        <div className="hero-content">
          <h1>Quantam Computer Projects</h1>
          <p>
            Quantum computers are machines that use the properties of quantum
            physics to store data and perform computations. ... classical
            computers, which include smartphones and laptops, encode
            information in binary “bits” that can either be 0s or 1s. In a
            quantum computer, the basic unit of memory is a quantum bit or
            qubit.
          </p>
          <h3>Our Total Bugedts <span>$100</span> Billon</h3>

         <Button classname='btn-green' text='learn-more' iconClass='fab fa-slack-hash'>
         </Button>
         
        </div>
        <img src={HeroImg} alt="" />
      </div>
    )
}
