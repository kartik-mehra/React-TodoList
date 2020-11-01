import './App.css';
import React, { useState } from 'react';
import Input from './components/inputField/input'
import List from './components/lists/list'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
function App() {

  const [state, setstate] = useState([]);
  
  library.add(faCheckSquare, faCoffee)
  return (
    <div className="App">
      <header className="App-header">
       TO-DO Lists
      </header>
      <div style = {{flex:1, marginTop:'1vh',display:"flex",flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start  ',}}>
      <Input state = {state} setstate={setstate}/>
      <List state = {state} setstate={setstate}/>
      </div>
      
    </div>
  );
}

export default App;
