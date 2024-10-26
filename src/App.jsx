import { useRef } from "react";



const App = () => {

let play=useRef();

let love=()=>{
  play.current.src="https://placehold.co/600x400?text=Hello\nWorld";
  play.current.setAttribute("height" ,"100px")
  play.current.setAttribute("width" , "300px")
}

  return (
    <div>


<img src="https://placehold.co/600x400@2x.png"  ref={play} />
<button onClick={love}>click here</button>



    </div>
  );
};

export default App;