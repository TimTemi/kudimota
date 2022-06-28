import CustomButton from "../CustomButtton/Custom-button";
import CustomInput from "../CustomInput/Custom-Input";
import rectangle from "../../assets/Rectangle22.png";
import kudimota from "../../assets/kudimota33.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";
import { path } from "../../routes";
import "./Navigation.css";

function Navigation() {
  return (
    <section>
      <div className="main">
        <div className="leftSide">
          <img className="logoP" src={`${kudimota}`} alt="kudimota" />
          <img className="rectangle" src={`${rectangle}`} alt="img" />
          <div className="overlay">
            <div className="text">
              <h1 className="text">
                GET TO PREDICT THE CAR PRICE OF YOUR CHOICE VECHICLE SEAMLESSLY
              </h1>
            </div>
            <Link to={path.gallery}>
              <CustomButton
                title="Check Gallery"
                style={{ marginTop: "7rem", padding: "1em 3em" }}
              />
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <CustomInput
            placeholder="search for cars by name"
            type="input"
            style={{
              backgroundColor: "inherit",
              padding: "1.3em 2.6em",
              position: "absolute",
              left: "70%",
              top: "5%",
              backgroundImage: `url(${search})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "1em",
              backgroundPosition: "center right ",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Navigation;
