import rectangle from "../../assets/Rectangle22.png";
import kudimota from "../../assets/kudimota33.png";
import car from "../../assets/toyotacamry.png";
import Footer from "../../components/Footer/Footer";
import CustomButtton from "../../components/CustomButtton/Custom-button";
import "./PredictValue.css";
import { Link } from "react-router-dom";
import { path } from "../../routes";

const PredictValue = () => {
  return (
    <section className="pdv">
      <div className="predMain">
        <div className="sideL">
          <img className="logoP" src={`${kudimota}`} alt="kudimota" />
          <img className="recImage" src={`${rectangle}`} alt="img" />
        </div>
        <div className="sideR">
          <div className="pagetitle">
            <h2>Output Result</h2>
          </div>
          <div className="car">
            <img
              className="carpredicted"
              src={`${car}`}
              alt="A car or something"
            />
            <div className="value">
              <h2>Price predicted</h2>
              <div className="textValue">
                <h2>#3,000,000</h2>
                <hr />
                <h2>#5,000,000</h2>
              </div>
              <div>
                <Link to={path.homepage}>
                  <CustomButtton
                    type="submit"
                    title="Back To Home"
                    style={{ width: "13rem", padding: "1rem" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default PredictValue;
