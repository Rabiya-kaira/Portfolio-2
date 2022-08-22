import Header from "../../components/Header";
import Home from "../../components/Home/index.js";
import AboutMe from "../../components/AboutMe/index.js";
import Resume from "../../components/Resume/index.js";
import Service from "../../components/Service/index.js";
import Portfolio from "../../components/Portfolio/index.js";
import Pricing from "../../components/Pricing/index.js";
import Clients from "../../components/Clients/index.js";
import Blog from "../../components/Blog/index.js";
import Contact from "../../components/Contact/index.js";

function Homepages() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe/>
      <Resume/>
      <Service/>
      <Portfolio/>
      <Pricing/>
      <Clients/>
      <Blog/>
      <Contact/>
    </div>
  );
}
export default Homepages;
