import { useState } from 'react';
import Button from '../Button/Button';
import './Cart.style.css';


let handleCart;

export default function Cart() {
  const [salary2, setSalary] = useState(0);
  const [name2, setName] = useState('Add to Scientist');
  const [count2, setCount] = useState(0)
  
  handleCart = (name, salary, count) =>{

    setName(name);
    
    if(name2 === name){

      alert('Every Scientist Select One Time')
      
    } else{
      setSalary(salary)
      if(salary2){
          const newSalary = salary2 + salary;
          setSalary(newSalary)
      }
      
      setCount(count)
      if(count2){
        const newCount = count2 + count;
        setCount(newCount)
      }
    }

  }
    return (
      <div className="cart-area">
        <div className="cart">
          <h3>Total Scientist</h3>
          <div className="content-items">
              <ul>
                <div className="content-item">
                    <li>Total Scientist :</li>
                    <li>{count2}</li>
                </div>
                <div className="content-item">
                    <li>Total Cost :</li>
                    <li>${salary2}</li>
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
        <ol>
          <li>{name2}</li>
          
        </ol>
    </div>
      </div>
    )
}

export { handleCart };

