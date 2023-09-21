import { useState } from 'react'

const ProductDetailsToggle = ({product, theme}) => {
   const[isVisible, setIsVisible] = useState(false)
  const handleVisible =()=>{
    setIsVisible(!isVisible)
    

  }

  return (
    <div>
      <button onClick={handleVisible}>toggle description</button>
     { isVisible ? <div className='product'>{product.description}</div> : null }
    </div>
  )
}

export default ProductDetailsToggle
