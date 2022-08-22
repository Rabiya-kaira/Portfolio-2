import "./style.css";



function Slider(props)
{
  function getClassName()
  {
    return `container ${props.className ? props.className : ""}`;
  }
return(
  <div className={getClassName()}>
<img src={props.src} alt={props.logo}/>

  </div>
)
}
export default Slider;