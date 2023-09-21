import { useState } from "react"


const AddNames = () => {
  const [addNames, setAddNames] = useState("")
  const [displayNames, setDisplayNames] = useState([])
  
  const handleChange = (e) => {setAddNames(e.target.value)}
  const handleSubmit = () => {
        setDisplayNames([addNames, ...displayNames])
        setAddNames("")
}


  return (
    <div>
      <input onChange={handleChange} value={addNames} type="text" />
      <button  onClick={handleSubmit}>AddName</button>
      <ul>
        {displayNames.map((name) => <li className="name">{name}</li>
        )}
      </ul>
    </div>
  )
}

export default AddNames
