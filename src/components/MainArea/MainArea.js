import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientist from '../Scienctist/Scientist';
import './MainArea.style.css';

export default function ScientistArea() {
    //Scientist state
    const [scientists, setScientists] = useState([]);
    
    //Cart State
    const [cart , setCart] = useState([])

    //Fetch Data from public Folder
    useEffect(()=>{
        fetch('./scientist.json')
        .then(res => res.json())
        .then(data => setScientists(data))
    }, [])

    //handle Cart

    const handleCart = (scientist) =>{
        const newCart = [...cart, scientist];
        setCart(newCart);
    }
    return (
        <div className='main-area'>
            <div className='scientist-area'>
                {
                    scientists.map(scientist => <Scientist
                         scientist={scientist}
                          key={scientist.name} 
                          handleCart={handleCart}
                        />)
                }
            </div>
               
            <Cart cart={cart}/>
        </div>
    )
}
