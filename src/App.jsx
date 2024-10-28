import { useRef, useState } from "react";


const App = () => {


  const [ NUMBER,NEWNUMBER]=useState({
    key1:"value01",
    key2:"value2",
    key3:"value3"
  })



  const onchang=()=>{

NEWNUMBER(

  prevesOBJ=>({

...prevesOBJ,
key1:"hello word"

  })
)


  }


  return (
    <div>

<h1>{NUMBER.key1}</h1>

<button onClick={onchang}>clickhere</button>
      
    </div>
  );
};

export default App;