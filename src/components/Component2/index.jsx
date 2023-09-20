import React, { useState } from 'react'

const SimpleInput = () => {
    const [data, setData] = useState("")
    const [displayText, setDisplayText] = useState("")


    const handleChange = (e) =>  setData(e.target.value)     
    const handleClick = () =>  setDisplayText(data)
       
    
  return (
    <div>
      <label>
        <input onChange={handleChange} value={data} type="text"   />
        <button onClick={handleClick}>Show this text on screen</button>
        <div className='textDisplay' >
        {displayText}

         </div>
      </label>
    </div>
  )
}

export default SimpleInput
