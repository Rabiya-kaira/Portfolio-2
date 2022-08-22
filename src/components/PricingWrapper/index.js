import "./style.css";
import Typography from "../Typography/index.js";
import PrimaryButton from "../primaryButton/index.js";


function PricingWrapper(props)
{
  return (
    <div className="pricingwrapperdiv">
<div>
<Typography className="H3" type="H3">{props.heading}</Typography>
<h4>Holisticly initiate functionalized information without viral imperatives.</h4>
</div>
<h5>Usd</h5>
<h3 className="redh3">{props.dollar}<span>/Onetime</span></h3>
<p>For Onetime Services only</p>
<ul>
<li>4 Hosting Attendance</li>
<li>9 Email Marketing</li>
<li>3 Data Bases</li>
<li>2 Design Pack</li>
<li>3 Website Layouts</li>
<li>5 Header Style</li>
</ul>
<div className="buttondiv">
<PrimaryButton className="button">Choose plane</PrimaryButton>
</div>
</div>
  );
}
export default PricingWrapper;