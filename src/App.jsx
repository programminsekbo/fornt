import { useRef } from "react";



const App = () => {
let least,fiste=useRef();


let love=()=>{
let name1=fiste.value;
let name2=least.value;

alert(name1+" "+name2)

}


  return (
    <div>

<input  ref={(a)=>fiste=a} type="firest name" />
<input ref={(a)=>least=a}  type="lest name" />
<button onClick={love}>click here</button>



    </div>
  );
};

export default App;