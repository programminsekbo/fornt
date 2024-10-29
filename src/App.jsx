import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from './component/Demo';
import Loging from './component/Loging';
import Headar from './component/Headar';


const App = () => {
  return (
    <div>
      
<BrowserRouter>
  <Routes>

<Route   path="/" element={<Demo/>}/>
<Route path="/loging"  element={ <Loging/>}/>
<Route path="*" element={ <Headar/> }/>




  </Routes>



</BrowserRouter>






    </div>
  );
};

export default App;