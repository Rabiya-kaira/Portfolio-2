import "./style.css";




function  Contactcard(props)
{

  const getClassName=()=>
  {
    return props.className ? props.className:"";
  }

  const divClassName=()=>
  {
    return `contactcarddiv ${props.divclassName? props.divclassName:""}`;
  }
return (
  <div  className= {divClassName()}>

< img src={props.src}  alt={props.logo} className = {getClassName()}/>

  <h5 className="title"> {props.title}</h5>
  <h5 className="subtitle"> {props.subtitle}</h5>
  </div>
  
);
}
export default Contactcard;