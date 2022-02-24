
import './App.css';
import Numero from './Numero'
import Palo from './Palo'

function App() {
  return (
    <div className="App">
    
    <div className='palo'>

    <Palo/>
    </div>


       <Numero/>

  <div className='paloAbajo'>    
     <Palo/>
    
  </div>

     
    </div>
  );
}

export default App;
