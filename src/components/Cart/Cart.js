import Button from '../Button/Button';
import './Cart.style.css';

export default function Cart() {
    return (
        <div className="cart-area">
            <div className="cart">
              <h3>Total Scientist</h3>
              <div className="content-items">
                <ul>
                  <div className="content-item">
                    <li>Total Scientist :</li>
                    <li>15</li>
                  </div>
                  <div className="content-item">
                    <li>Total Cost :</li>
                    <li>$15550</li>
                  </div>
                </ul>
              </div>
             <Button classname='btn-green' text='Start Project' iconClass='fas fa-cog'></Button>
            </div>
            <div className="added-name">
              <ol>
                <li>Newton Sir</li>
                <li>Newton Sir</li>
                <li>Newton Sir</li>
                <li>Newton Sir</li>
                <li>Newton Sir</li>
              </ol>
            </div>
          </div>
    )
}
