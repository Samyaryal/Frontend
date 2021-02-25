import './App.css';
import Data from './data.json';
import React, {useState} from 'react';
import Resturant from './components/Resturant';


const App = () => {
  const data = Object.values(Data)[0]
  const [resturants, setResturants] = useState([...data])

  const sortAZ= () => {
    const ascCompare = (a1, b1) => {
      const a = a1.name;
      const b = b1.name;

    if ( a < b) return -1;
    else if ( a > b) return 1;
    else return 0;
    }
    setResturants(prevState => [...prevState].sort(ascCompare))
  }

  const sortZA= () => {
    const dscCompare = (a1, b1) => {
      const a = a1.name;
      const b = b1.name;

    if ( a < b) return 1;
    else if ( a > b) return -1;
    else return 0;
    }
    setResturants(prevState => [...prevState].sort(dscCompare))
  }
  
  const display = (data) =>{
    let result = "";
    data.forEach(({}))
  }

  return (
    <div className = "filters">
    <div>
    SortBy: 
    <select className="sort-by">
    <option value ="">Select one</option>
    <option value ="price">Price</option>
    <option value ="location">Location</option>
    </select>
    </div>
    <div>
    SorytOrder:
    <select class="sort-order">
      <option value="">Select one</option>
      <option value="asc">Ascending {sortAZ}</option>
      <option value="desc">Descending {sortZA}</option>
    </select>
    </div>
    <div className="App-resturants row">
      {resturants.map((resturant,i) => <Resturant key={i} resturant={resturant}/>)}
    </div>
    </div>
    
    
  );
}

export default App;
