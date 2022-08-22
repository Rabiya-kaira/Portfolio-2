import Title from "../Title/index.js";
import Typography from "../Typography/index.js";
import "./style.css";
import ServiceWrapper from "../ServiceWrapper/index.js";

function Service() {
  return (
    <section className="servicesection">
      <Title>My Services</Title>
      <Typography type="H1">
        We Have Done Lot's of <span>My Best Services</span> Lets Check Some of
        Them
      </Typography>

      <ServiceWrapper
      className="servicewrapper1"
        heading="PSD Template Design"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/01.png"
        alt="logo"
      />

       <ServiceWrapper
      className="servicewrapper2"
        heading="Mobile Apps Design"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/02.png"
        alt="logo"
      />
       <ServiceWrapper
      className="servicewrapper3"
        heading="SEO Optimization"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/03.png"
        alt="logo"
      />
       <ServiceWrapper
      className="servicewrapper4"
        heading="Web Development"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/04.png"
        alt="logo"
      />
    </section>
  );
}
export default Service;
