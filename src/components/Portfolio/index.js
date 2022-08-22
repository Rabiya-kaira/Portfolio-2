import "./style.css";
import Title from "../Title/index.js";
import Typography from "../Typography/index.js";
import PrimaryButton from "../primaryButton/index.js";

function Portfolio() {
  return (
    <section className="portfoliosection">
      <Title>My Portfolio</Title>
      <Typography type="H1">
        We Have Done Lot's of <span>My Best Works</span> Lets Check Some of Them
      </Typography>


      <div className="centersection">
      <div className="portfoliobutton">
      <div>
        <PrimaryButton>
          All <span>Gallery</span>
        </PrimaryButton>
      </div>
      <div>
        <PrimaryButton>
          Images <span>Gallery</span>{" "}
        </PrimaryButton>
      </div>
      <div>
        <PrimaryButton>
          {/* <img src="" alt="logo" /> */}
          Images <span>Gallery</span>
        </PrimaryButton>
      </div>
      </div>
      <div  className="portfoliodivimg1">
        <img
       
          src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/01.jpg"
          alt="img"
        />
        </div>
        <div>
        <img
          src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/02.jpg"
          alt="img"
        />
      </div>
      <div>
        <video width="330" height="217" controls>
          <source
            src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/03.jpg"
            type="video/mp4"
          />
        </video>
      </div>
      <img
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/04.jpg"
        alt="img"
      />
      <div>
        <img
          src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/06.jpg"
          alt="logo"
        />
      </div>
      <div>
        <video width="330" height="217" controls>
          <source
            src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/03.jpg"
            type="video/mp4"
          />
        </video>
      </div>
      </div>
    </section>
  );
}
export default Portfolio;
