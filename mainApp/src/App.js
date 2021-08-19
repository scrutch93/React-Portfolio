import {useState} from "react"
import "./style.css"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';

import Text from "./components/Text";
import Input from "./components/Input";

function App() {
  //const [text, setText] = useState("Steven")
  
  //const update = (event) => {
   // setText(event.target.value)
  //}

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
    </>
  );
}

export default App;
