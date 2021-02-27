import './App.css';
import Data from './data.json';
import React, {useState} from 'react';
import Resturant from './components/Resturant';
import Button from './components/Button';
import Footer from './components/Footer';

const App = () => {
  const data = Object.values(Data)[0]
  const [resturants, setResturants] = useState(data)

  const sortAZ= () => {
    const ascCompare = (a1, b1) => {
      const a = a1.name;
      const b = b1.name;

    if ( a < b) return -1;
    else if ( a > b) return 1;
    else return 0;
    }
    setResturants(data => [...data].sort(ascCompare))
  }

  const sortZA= () => {
    const dscCompare = (a1, b1) => {
      const a = a1.name;
      const b = b1.name;

    if ( a < b) return 1;
    else if ( a > b) return -1;
    else return 0;
    }
    setResturants(data =>[...data].sort(dscCompare))
  }
  
  const returnOriginal = () => {
    setResturants(data)
  }

  return (
    <div className = "App">
    <h1 className="header">Pick your favourite Resturant</h1>
    <div className="App-buttons">
    <Button name={'Ascending'} task ={sortAZ}/>
    <Button name={'Descending'} task = {sortZA} />
    <Button name={'Original'} task ={returnOriginal}/>
    </div>
    <div className="app-resturants-row">
      {resturants.map((resturant) => <Resturant resturant={resturant}/>)}
    </div>
    <Footer />
    </div>
    
    
  );
}

export default App;
