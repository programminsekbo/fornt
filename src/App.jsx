import { useRef } from "react";

const App = () => {

let fValue,lvalue=useRef();

let onchang=()=>{

 let hridoy=fValue.value;
 let good=lvalue.value;

  alert(hridoy+" "+good)
  



}



  return (
    <div>


<input ref={(e)=>fValue=(e)} type="text" /><br />
<input  ref={(e)=>lvalue=(e)} type="text" />

<button  onClick={onchang}>click</button>



      
    </div>
  );
};

export default App;