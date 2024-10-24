import Headar from "./Headar";


const Demo = (props) => {
    return (
        <div>
            {props.objat}
        <Headar objat={props.objat-200} />
  
        </div>
    );
};

export default Demo;