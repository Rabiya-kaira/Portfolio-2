import "./style.css";
import Typography from "../Typography/index.js";
import PrimaryButton from "../primaryButton";

function Home() {
  return (
    <section className="homeSection">
      <div>
        <div className="hometext1">
          <Typography type="H1">Hello...</Typography>
          <Typography type="H1" className="spanH1">
            I'm <span>Emma</span> Grant A Professional
          </Typography>
          <Typography type="H1" className="webH1">WEB-DEVELOPER</Typography>
        </div>
        <div className="homeBtn">
          <PrimaryButton>
            <span>View My Portfolio</span>
            <img
              src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/btn-1.png"
              alt="img"
            />
          </PrimaryButton>
        </div>

      </div>
      <div className="imgcontainer">
      <div className="imgSection">
        <img
          src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/banner/02.png"
          alt="pic"
        />
      </div>
      </div>
    </section>
  );
}
export default Home;
