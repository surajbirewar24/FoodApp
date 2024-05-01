
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Login from './screens/Login';


function App() {
  return (
    <Router>
    <div> 
      <Routes>
        <Route exact path="/"  element={<Home/>}></Route>
        <Route exact path="/Login"  element={<Login/>}></Route>



      </Routes>
      
       </div>
    </Router>
  );
}

export default App;
