import './App.css';
import Data from './data.json';
import React from 'react';


function App() {
  const  
  a = Data.sort ((a, b) => {
    if ( a < b) return -1;
    else if ( a > b) return 1;
    else return 0;
  })


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
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
    </div>
    </div>
    
    
  );
}

export default App;
