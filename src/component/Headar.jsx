import Fotter from "./Fotter";



const Headar = (props) => {

    return (
        <div>
          {props.objat}
          <Fotter  objat={props.objat-600}/>
        </div>
    );
};

export default Headar;