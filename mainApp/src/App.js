import {useState} from "react"
import "./style.css"
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Input from "./components/Input";

function App() {
  const [text, setText] = useState("Steven")
  
  const update = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <Navbar />
      <Text mirror={text}/>
      <Input change={update}/>
    </>
  );
}

export default App;
