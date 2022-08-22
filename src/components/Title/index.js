import "./style.css";



function Title(props)
{
  function getClassName()
  {
    return `Titlediv ${props.className ? props.className:""}`;
  }
return ( 
<span className = {getClassName()}>{props.children}</span>
);
}
export default Title;