import Contactcard from "../Contactcard/index.js";
import "./style.css";
import Typography from "../Typography/index.js";
import Title from "../Title/index.js";
import PrimaryButton from "../primaryButton/index.js";




function AboutMe() {
const slideArr=[
  "	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/06.png",
  "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/01.png",
  "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/02.png",
  "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/03.png",
  "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/04.png",
  "	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/06.png",
  "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/sponsor/01.png"

]


return (
  <div>
    <section className="contactsection">
      <Contactcard
      divclassName="contactcard1"
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/01.png"
        logo="logo"
        title="Give us a Call"
        subtitle="001-888-123-4567"
      />

      <Contactcard
     
        divclassName="contactcard2"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/02.png"
        logo="logo"
        title="Send us a Message"
        subtitle="maxinoadmin@mail.com"
      />
      <Contactcard
      divclassName="contactcard3"
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/03.png"
        logo="logo"
        title="Visit our Location"
        subtitle="02/07 Suitland Street 120"
      />
    </section>
    <section className="portfolio">
      <Typography type="H3">Welcome to My Portfolio</Typography>
      <Typography type="H1">
        Why <span>3650 People</span> Love Us Believe My Awesome Services
      </Typography>
      <div className="portfolioimgdiv">
        <img
          src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/about/01.png"
          alt="img"
          className="portfolioimg"
        />
      </div>
      <Title>Hello World</Title>
      <Typography type="H1">
        I am <span>Emma Grant</span> UX Designer From New York City 1200.
      </Typography>
      <Typography type="H4">
        Energisticaly Simplify Toping Line Solutions without Leveraged Resutrs
        are an Colabrerse Channels Throughe Qrthogonal e-Commerce Energistcaly
        Growing Practve Anding Platform Niches After Paralel Technolog
      </Typography>
      <div className="detaildiv">
        <ul>
          <li>
            Name <span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  :Emma Grant</span>
          </li>
          <li>
            Date of Birth<span>&nbsp; &nbsp; :27 Feb 1994</span>
          </li>
          <li>
            Email <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: smith7@gmail.com</span>
          </li>
          <li>
            Phone <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : +258 369 147</span>
          </li>
          <li>
            Fax <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: 222 666 888</span>
          </li>
          <li>
            Nationality <span>&nbsp; &nbsp; &nbsp;&nbsp;:United States</span>
          </li>
          <li> 
            Address <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   : Suite 02 New Elephant Road</span>
          </li>
        </ul>
      </div>
      <PrimaryButton className="resumebutton">
       <span className="resumebuttontext"> Download Resume</span>
        <img
          src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/btn-1.png"
          alt="logo"
        />
      </PrimaryButton>
      <div className="sliderdiv">
      {
      slideArr.map((value)=>
      {
         return <img src={value} alt="logo"/>;
      })
      }
      </div>
      
    </section>
  </div>
);
}
export default AboutMe;
