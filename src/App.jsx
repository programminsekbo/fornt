import { useRef, useState } from "react";


const App = () => {

const [number,setnumber]=useState(0);



  return (
    <div>
  <h1>Number:{number}</h1>
<br />
<button onClick={()=>setnumber(number+1)}>click++</button>
<button onClick={()=>setnumber(number-1)}>click--</button>


      
    </div>
  );
};

export default App;