import "./style.css";
import Expyeardiv from "../Expyeardiv/index.js";

function ResumeWrapper(props) {
  return (
    <div className="wrapperdiv">
    <div className="wrapperdivchild">
      <div>
        <img src={props.src} alt={props.alt} />
        <h5> {props.children}</h5>
      </div>
      
      <Expyeardiv>2014-2019</Expyeardiv>
      </div>
      <h3>{props.title}</h3>
      <h4>{props.paragraph}</h4>
    </div>
  );
}
export default ResumeWrapper;
