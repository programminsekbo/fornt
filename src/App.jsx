import { useRef } from "react";

const App = () => {

let myValue=useRef();

let onchang=()=>{

myValue.src="https://placehold.co/600x400/000000/FFFFFF/png"

myValue.setAttribute("heigth","300px")
myValue.setAttribute("width","100px")


}



  return (
    <div>


<img  ref={(e)=>myValue=(e)}  src="https://placehold.co/600x400" alt="bangladesh" />

<button  onClick={onchang}>click</button>



      
    </div>
  );
};

export default App;