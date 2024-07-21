import { useReducer } from "react";
import './App.css';

let oldState = {
  value: 0,
};

const reducerFunction =(oldState, action)=>{
  console.log("action--->",action.type);
  console.log("oldState--->",oldState);
  switch(action.type){
    case"ADDITION":
    return {...oldState, value:oldState.value+action.payload};
      //break;
    case"SUBTRACTION":
    return {...oldState, value:oldState.value-action.payload};
      //break;
     default:
      return oldState;   
  }

}

function App() {

  //1.hook area

  const [newState,dispatch] = useReducer(reducerFunction,oldState);



  //2.function defination area



  //3.return statement
  return (
    <div className="App">
      <h1>{newState.value}</h1>
      <button type="button" onClick={()=>{dispatch({type:"ADDITION",payload:5})}}>+</button>
      <button type="button" onClick={()=>{dispatch({type:"SUBTRACTION",payload:5})}}>-</button>
    </div>
  );
}

export default App;
