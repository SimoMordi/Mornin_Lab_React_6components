import './App.css'
import Count from './components/Component1'
import SimpleInput from './components/Component2';
import RandomName from './components/Component3';


const App = () => {

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

      <div className="component-container grey">
        <h1>component 4</h1>
      </div>

      <div className="component-container purple">
        <h1>component 5</h1>
      </div>

      <div className="component-container pink">
        <h1>component 6</h1>
      </div>

    </div>
  );
}


export default App
