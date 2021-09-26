import Button from '../Button/Button';
import './Cart.style.css';

export default function Cart({cart}) {

  let total = 0;
  for(const scientist of cart){
    const salary = parseInt(scientist.salary)
    total = total + salary;
  }

  return (
      <div className="cart-area">
        <div className="cart">
          <h3>Total Scientist</h3>
          <div className="content-items">
              <ul>
                <div className="content-item">
                    <li>Total Scientist :</li>
                    <li>{cart.length}</li>
                </div>
                <div className="content-item">
                    <li>Total Cost :</li>
                    <li>${total} K</li>
                </div>
              </ul>
          </div>
          <Button
              classList='btn-green'
              text='Start Project' 
              iconClass='fas fa-cog'>
          </Button>
        </div>
        <div className="added-name">
          {
            cart.map(scientistName => <p>{scientistName.name}</p>)
          }
        </div>
      </div>
    )
}

