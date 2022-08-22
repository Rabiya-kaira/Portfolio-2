import "./style.css";

import Typography from "../Typography/index.js";
import PricingWrapper from "../PricingWrapper/index.js";
import Title from "../Title/index.js";


function Pricing() {
  return (
    <section className="Pricingsection">
      <Title>Pricing Plan</Title>
      <Typography type="H1">
        No Hidden Charge,Choose Your <span> Best Pricing Plan </span>
      </Typography>
      <PricingWrapper heading="Silver Plan" dollar="$20"/>
       <PricingWrapper heading="Gold Plan" dollar="$40"/>
        <PricingWrapper heading="Platinum Plan" dollar="$60"/>
    </section>
  );
}
export default Pricing;
