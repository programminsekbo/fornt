import { useRef } from "react";



const App = () => {

let number=useRef(null);
let myPTag=useRef();


let love=async ()=>{
  let respons=await fetch("https://dummyapi.online/api/movies")
   number.current=await respons.json()

}

let heat=()=>{
  myPTag.current.innerText=JSON.stringify(number.current)

}

  return (
    <div>

<p ref={myPTag}></p>

<button onClick={love}>aoi call</button>
<button onClick={heat}>sho data</button>



    </div>
  );
};

export default App;