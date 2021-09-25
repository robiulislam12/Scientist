import Cart from '../Cart/Cart';
import ScientistArea from '../Scientistarea/ScientistArea';
import './MainSection.style.css';

export default function MainSection() {
    return (
        <div className='main-area'>
            <div>
                <ScientistArea/>
            </div>
            <Cart/>
        </div>
    )
}
