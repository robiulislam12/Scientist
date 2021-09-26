import Button from '../Button/Button';
import './Scientist.style.css';

export default function Scientist({scientist, handleCart}) {
    
    const {name, img, dob, fields, salary, age} =scientist;
    
    return (
        <div className="scientist">
            <img src={img} alt={name} />
            <div className="content-items">
                <ul>
                    <div className="content-item">
                    <li>Name :</li>
                    <li>{name}</li>
                    </div>
                    <div className="content-item">
                    <li>DOB :</li>
                    <li>{dob}</li>
                    </div>
                    <div className="content-item">
                    <li>Fields :</li>
                    <li>{fields}</li>
                    </div>
                    <div className="content-item">
                    <li>Salary :</li>
                    <li>{salary}</li>
                    </div>
                    <div className="content-item">
                    <li>Age :</li>
                    <li>{age}</li>
                    </div>
                </ul>
            </div>
            
            <Button handleClick={()=> handleCart(scientist)} classList='btn-dark' text='Add to List' iconClass='fas fa-shopping-cart'/>
      </div>
    )
}
