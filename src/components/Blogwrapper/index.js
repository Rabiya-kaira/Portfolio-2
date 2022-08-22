import "./style.css";
import Typography from "../Typography/index.js";
import PrimaryButton from "../primaryButton";



function Blogwrapper(props) {
  return (
    <div className="blogwrappersection">
      <div className="blogimgdiv">
        <img
          src={props.src}
          alt={props.alt}
        />
      </div>
      <div className="postcontent" >
      <div className="bloglogodiv">
        <div>
          <img
            src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/blog/icon/01.png"
            alt="logo"
          />
          <p>04</p>
        </div>
        <div>
          <img
            src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/blog/icon/02.png"
            alt="logo"
          />
          <p>15</p>
        </div>
        <div>
          <img
            src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/blog/icon/03.png"
            alt="logo"
          />
          <p>12</p>
        </div>
      </div>
      <div className="contentpart">
      <p className="aboutadmin">
        Admin <span>Emma Grant</span>{" "}
      </p>
      <p className="aboutadmin">
        Date <span>14 April 2018</span>
      </p>
      <Typography type="H3">
        Ectain World Strain Blog Tegc Actuaze Wide World Strateic
      </Typography>
      <p className="paragraph">
        Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh
        Marke Postonn Bestn Practces eractve Fashion Fashion Economically And
        Sound Qources For
      </p>
      <PrimaryButton className="button">Read More </PrimaryButton>
      </div>
    </div>
    </div>
  );
}
export default Blogwrapper;
