import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientist from '../Scienctist/Scientist';
import './MainArea.style.css';

export default function ScientistArea() {
    const [scientists, setScientists] = useState([]);
    useEffect(()=>{
        fetch('./scientist.json')
        .then(res => res.json())
        .then(data => setScientists(data))
    }, [])

    return (
        <div className='main-area'>
            <div className='scientist-area'>
                {
                    scientists.map(scientist => <Scientist scientist={scientist} key={scientist.name}/>)
                }
            </div>
            <Cart scientists={scientists}/>
        </div>
    )
}
