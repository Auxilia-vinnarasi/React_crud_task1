//import logo from './logo.svg';
import './App.css';
import Create from "./create";
import Read from "./read";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Update from "./update";


function App() {
  return (
    <Router>
       <div className="main">
   
      <h3>React CRUD operations</h3>
     
      <div>
      <Create/>
     <Route exact path="/create" component={Create}/>
     {/*<Create/>*/}
      </div>
      <div style={{marginTop:20}}>
      <Route exact path="/read" component={Read}/>
       {/* <Read/>*/}
      </div>
      <Route path="/update" component={Update}/>
    
    </div>
    </Router>
   
  );
}

export default App;
