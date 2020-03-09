import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu'
const liste=[{
  title:'home'
},
{
  title:'service',drop:['for enterprenire',"mlkol","dsfpdsmf"]
},
{
  title:'contact',
 
},
]
function App() {

function  myFct() {alert("Hey ")}

  return (
    <div className="App">
      <header class="App-header">
        <Menu liste={liste} />
       </header>
     </div>
  )
}

export default App;
