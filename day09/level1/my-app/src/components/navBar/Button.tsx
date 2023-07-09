import Prop from "../../propsType/propsType"

const Button: React.FC<Prop["mode"]> = ({ mode,  BackGroundColor,  OnClick, Color}) => 
{  
    console.log("hereee", Color);
    
    return(
    
        <div className="Buttons">
            <button onClick={OnClick} style={{background:BackGroundColor, color:Color}}>
                {mode}
            </button>
        </div>
    );
};

export default Button;