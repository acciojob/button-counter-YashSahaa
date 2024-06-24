
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [counter,setCounter] = useState(0);

  function addOne(){
    setCounter(counter+1);
  }
  return (
    <div>
      <p>Button clicked {counter} times</p>
      <button onClick={addOne} >Click me</button>
    </div>
  )
}

export default App
