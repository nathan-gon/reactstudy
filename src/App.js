import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepages/homepage.component'
import './App.css';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
