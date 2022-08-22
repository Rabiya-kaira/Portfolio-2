import Title from "../Title/index.js";
import "./style.css";
import Typography from "../Typography/index.js";
import Contactcard from "../Contactcard/index.js";
import PrimaryButton from "../primaryButton/index.js";

function Contact() {
  return (
    <section>
      <Title>Hire Me</Title>
      <Typography type="H1">
        I Am Available For Your Next Awesome Project <span>Then Hire Me!</span>
      </Typography>
      <div></div>
      <Contactcard
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/01.png"
        alt="logo"
        title="Give us a Call"
        subtitle="001-888-123-4567"
      />
      <Contactcard
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/02.png"
        alt="logo"
        title="Send us a Message"
        subtitle="maxinoadmin@mail.com"
      />
      <Contactcard
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/03.png"
        alt="logo"
        title="Visit our Location"
        subtitle="02/07 Suitland Street 120"
      />
      <form>
        <input type="text" name="name" placeholder="Your Message" />
        <br />
        <br />
        <input type="text" name="email" placeholder="Your email" />
        <br />
        <br />
        <input type="text" name="text" placeholder="Your subject" />
        <br />
        <br />
        <input type="text" name="text" placeholder="Message" />
      </form>
      <PrimaryButton>Submit Message</PrimaryButton>
      <div className="footer">
        <div>
          <img
            src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/logo/footer-logo.png"
            alt="logo"
          />
          <p>
	    			© 2019. Maxino Designed By </p>
        </div>
      </div>
    </section>
  );
}
export default Contact;