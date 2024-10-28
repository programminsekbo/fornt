import { useRef } from "react";
import { json } from "react-router-dom";

const App = () => {

const apidata=useRef(null);
const  showapi=useRef();



const heidoy= async()=>{
const respons= await fetch('https://jsonplaceholder.typicode.com/todos/1')
apidata.current=await respons.json()


}

const onchang=()=>{

showapi.current.innerText=JSON.stringify(apidata.current)

}

  return (
    <div>


<p ref={showapi}></p>

<button onClick={heidoy}>api call</button>

<button  onClick={onchang}>sho data </button>



      
    </div>
  );
};

export default App;