import "./style.css";


function Expyeardiv(props)
{

  function getClassName()
  {
    return `yeardiv ${props.className ? props.className : ""}`;
  }
return (
<div className={getClassName()}>{props.children}</div>
);
}
export default Expyeardiv;