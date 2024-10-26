import { useRef, useState } from "react";



const App = () => {

let [number,setNumber]=useState({
  name1:"hridoy islam",
  roll:50415,
  cite:"dhaka",
});


let chang=()=>{

setNumber(
     


  prevOBJ=>({ 

    ...prevOBJ,
    name1:"rk rafik ridoy",
    roll:2000,



  })





)


}





  return (
    <div>
<h1>{number.name1}</h1>
<h1>{number.roll}</h1>
<button onClick={chang}>click</button>

    </div>
  );
};

export default App;