import React, { useState } from 'react'
import '../components/Conditional.css'

const Conditional = () => {

    const [conditional, setConditional] = useState(true);

    const updateConditional = () => {
        setConditional(!conditional);
    }
  return (
    <div className='conditional'>
      <button className='buttonConditional' onClick={updateConditional}>Change</button>
      <h1 >{conditional}</h1>

    {
        conditional ? <h2>Hay un mensaje {conditional.toString()}</h2>
        : <h2>Hay un mensaje {conditional.toString()}</h2>

      // conditional && <h2>Hay un mensaje</h2>
    }
    </div>
  )
}

export default Conditional
