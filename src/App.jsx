import { useState } from "react";


const App = () => {


  let [foromobj,setforomobj]=useState({
   fName:"",
   lName:"",
   city:"",

  })


let inputChsng=(property,value)=>{
   setforomobj(

prevobj=>({
 ...prevobj,
 [property]:value


})


   )



}


let fromsubmit=(e)=>{
  e.preventDefault();
  console.log(foromobj)
}




  return (
    <div>
      

  <form onSubmit={fromsubmit}>


<input onChange={(e)=>{inputChsng("fName",e.target.value)}}  value={foromobj.fName} type="text" placeholder="firstName"  /><br />


<input onChange={(e)=>{inputChsng("lName",e.target.value)}} value={foromobj.lName} type="text" placeholder="lastName" />
<br />

  <select onChange={(e)=>{inputChsng("city",e.target.value)}} value={foromobj.city} >

<option value="">choose city</option>
<option value="dhaka">dhaka</option>
<option value="dinajpur">dinajpur</option>
<option value="thakungonj">thakungonj</option>
<option value="soidpur">soidpur</option>


  </select><br />

<button>submit</button>




</form>







    </div>
  );
};

export default App;