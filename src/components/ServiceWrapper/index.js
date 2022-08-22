import "./style.css";
import Typography from "../Typography/index.js";




function ServiceWrapper (props)
{
function getClassName()
{
  return `${props.className? props.className:""}`;
}




return (
  <div className={getClassName()}>
  <div className="servicedivtext">
<Typography type="H3">{props.heading}</Typography>

<h4>Mnique deplo scalable catals forin Monec formu was unique</h4>
<ul>
<li>Motion Graphic Design</li>
<li>3D animation Design</li>
<li>Info Graphic Design</li>
<li>Vector Design</li>
</ul>
</div>
<div class="wrapperimg">
<img src={props.src} alt={props.alt}/>
</div>
  </div>
);
}
export default ServiceWrapper;