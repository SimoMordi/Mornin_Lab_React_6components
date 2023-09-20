import React, { useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => setCount(count => count +1)}>Add +</button>
        <button onClick={() => setCount(count => count - 1)}>Subtract -</button>
        <h3 style={{color: 'white'}}>{count}</h3>
    </div>
  )
}


export default Count

