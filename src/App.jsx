import { useRef, useState } from "react";



const App = () => {

let [number,setNumber]=useState(0);



  return (
    <div>
  <h1>number:{number}</h1><br />

<button onClick={()=>setNumber(number+1)}>click+</button>
<button onClick={()=>setNumber(number-1)}>click - </button>


    </div>
  );
};

export default App;