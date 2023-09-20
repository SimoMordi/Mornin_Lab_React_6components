import React, { useState } from 'react'

const RandomName = () => {
    const  namesArray = ["Willow", "River", "Sky", "Daisy", "Aspen"]
    const [randomName, setRandomName] = useState(namesArray)

    const handleChange = () => {
        const randomNameIndex = Math.floor(Math.random() * namesArray.length)
        return handleChange[randomNameIndex]
    }


  return (
    <div>
      <button  onClick={() => setRandomName(handleChange())}>Random Name:</button>
      <h2>{randomName}</h2>
    </div>
  )
}

export default RandomName
