import Demo from "./component/Demo";
import Headar from "./component/Headar";
import Loging from "./component/Loging";
import {BrowserRouter, Route, Routes} from "react-router-dom"



const App = () => {


  return (
    <div>
<BrowserRouter>


<Routes>

<Route  path="/"   element={<Demo/>} />
<Route  path="/login" element={<Loging/>}/>
<Route  path="*" element={<Headar/>}/>





</Routes>





</BrowserRouter>








      
    </div>
  );
};

export default App;