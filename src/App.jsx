import { useState } from 'react';
import './App.css'
import Count from './components/Component1'
import SimpleInput from './components/Component2';
import RandomName from './components/Component3';
import AddNames from './components/Component4';
import ToggleTheme from './components/Component5';
import ProductDetailsToggle from './components/Component6';


const App = () => {

 const [product, setProduct ]= useState({
    title: 'Say Something',
    description: 'well decribed'
  })

  return (
    <div className="App">
      <div className="component-container red">
        <h1>component 1</h1>
        <Count />
       </div>

      <div className="component-container blue">
        <h1>component 2</h1>
        <SimpleInput />        
      </div>

      <div className="component-container green">
        <h1>component 3</h1>
        <RandomName />
      </div>

      <div className="component-container grey addname">
        <h1>component 4</h1>
        <AddNames />
      </div>

      <div className="component-container purple">
        <h1>component 5</h1>
        <ToggleTheme />
      </div>

      <div className="component-container pink">
        <h1>component 6</h1>
        <ProductDetailsToggle product={product}/>
      </div>

    </div>
  );
}


export default App
