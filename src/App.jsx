import { useRef } from "react";

const App = () => {

let lvalue=useRef(0);

let onchang=()=>{

lvalue.current++;
console.log(lvalue.current++)
  
}
let heidoy=()=>{

  lvalue.current--;
  console.log(lvalue.current--)
    
  }
  



  return (
    <div>

<button onClick={heidoy}>---</button>

<button  onClick={onchang}>click</button>



      
    </div>
  );
};

export default App;