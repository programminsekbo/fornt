import { useParams } from "react-router-dom";
import Manu from "./Manu";


const Loging = () => {


    let {id,name}=useParams()

    return (
        <div>
            <h1>id:{id}</h1>
            <h1>name:{name}</h1>
            <Manu/>
<h1>my loging page</h1>



        </div>
    );
};

export default Loging;