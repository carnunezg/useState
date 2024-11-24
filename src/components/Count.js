import React, { useState } from 'react';
import '../components/Count.css';

function Count() {

    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1);
    }

    const downCount = () => {
        if( count > 0 ){
            setCount(count - 1);
        }    
    }

    const clean = () => {
        setCount(0);
    }


  return (
    <div className='card'>
        <div className='count'>
        <h1 className='h1'>Contador</h1>
        <h2>{count}</h2>
        <div>   
            <button className='button' onClick={downCount}>-</button>     
            <button className='button' onClick={upCount}>+</button>
        </div>
        < button className='button' onClick={()=>clean()}>Limpiar</button>

    </div>
    </div>
  )
}

export default Count;
