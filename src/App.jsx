import { useState } from "react";



const App = () => {
  let [number,setnumber]=useState({fName:"",lname:"",cite:"",gender:""})




const hridoy=(property,value)=>{
  setnumber(prevOBJ=>({

    ...prevOBJ,
    [property]:value
  }))



}

const myvalue=(e)=>{
  e.preventDefault();
console.log(number)


}

  return (
    <div>


<form onSubmit={myvalue}>

<input onChange={(e)=>{hridoy("fName",e.target.value)}}  value={number.fName}  type="text" placeholder="fastname" />
<input onChange={(e)=>{hridoy("lname",e.target.value)}}   value={number.lname} type="text" placeholder="lastname" /><br />

<select value={number.cite} onChange={(e)=>{hridoy("cite",e.target.value)}} >
<option value="">ahose dite</option>
<option value="dhaka">dhaka</option>
<option value="dinajpur">dinajpur</option>
<option value="thakurgonj">thakurgonj</option>
<option value="setabgonj">setabgonj</option>
<option value="soidpur">soidpur</option>

</select>

<br />

<input onChange={()=>{hridoy("gender","Mail")}}  checked={number.gender==="Mail"} type="radio" name="gender"/>Mail
<input onChange={()=>{hridoy("gender",'femail')}}  checked={number.gender==="femail"} type="radio" name="gender"/>femail
<br />

<button>submit</button>








</form>






    </div>
  );
};

export default App;