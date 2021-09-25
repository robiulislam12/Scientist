import Img from '../../assets/images/newton.jpg';
import Button from '../Button/Button';
import ContentItems from '../ContentItems/ContentItems';
import './Scientist.style.css';

export default function Scientist() {
    return (
        <div className="scientist">
            <img src={Img} alt="newton" />

            <ContentItems/>
            
            <Button classname='btn-dark' text='Add to Cart' iconClass='fas fa-shopping-cart'></Button>
      </div>
    )
}
