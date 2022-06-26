import CustomInput from "../../components/CustomInput/Custom-Input";
import CustomButton from "../../components/CustomButtton/Custom-button";
import kudimota from "../../assets/kudimota33.png";
import Footer from "../../components/Footer/Footer";
import "./UserSpecifications.css";
import ruby from "../../assets/toyotaRed.png";
import blue from "../../assets/toyotaBlue.png";
import black from "../../assets/toyotaBlack.png";
import model from "../../assets/toyotacamry.png";
import boxr from "../../assets/ruby.png";
import boxbl from "../../assets/blue.png";
import boxb from "../../assets/black.png";

const UserSpecifications = () => {
  return (
    <section className="uspec">
      <div className="parent">
        <div className="side_1">
          <img className="logo" src={`${kudimota}`} alt="kudimota" />
          <div className="car_type">
            <div className="blue">
              <img className="first" src={`${blue}`} alt="cars" />
              <div className="details">
                <p>2018 Toyota Camry</p>
                <p>
                  Color: Blue <img src={`${boxbl}`} alt="colours" />
                </p>
              </div>
            </div>
            <div className="ruby">
              <img className="second" src={`${ruby}`} alt="cars" />
              <div className="details">
                <p>2018 Toyota Camry</p>
                <p>
                  Color: Ruby <img src={`${boxr}`} alt="colours" />
                </p>
              </div>
            </div>
            <div className="black">
              <img className="third" src={`${black}`} alt="cars" />
              <div className="details">
                <p>2018 Toyota Camry</p>
                <p>
                  Color: Black <img src={`${boxb}`} alt="colours" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="side_2">
          <div className="page_title">
            <h2>Input Car Specifications</h2>
          </div>
          <div className="pickedCar">
            <div className="model">
              <img className="fourth" src={`${model}`} alt="modal" />
            </div>
            <form className="data">
              <div className="input">
                <div className="left">
                  <div className="one">
                    <h2>Toyota Camry</h2>
                    <p className="side_2P">Beautiful and Bold</p>
                  </div>
                  <CustomInput style={{ backgroundColor: "rgb(54,31,34)" }} />
                  <CustomInput style={{ backgroundColor: "rgb(54,31,34)" }} />
                  <CustomInput style={{ backgroundColor: "rgb(54,31,34)" }} />
                </div>
                <div className="right">
                  <div className="two">
                    <p className="side_2P">
                      Toyota camry is a consectetur adipisicing elit. Fugiat,
                      labore modi ab officia rem aliquam eius minus neque unde
                      dignissimos
                    </p>
                  </div>
                  <CustomInput style={{ backgroundColor: "rgb(54,31,34)" }} />
                  <CustomInput style={{ backgroundColor: "rgb(54,31,34)" }} />
                  <CustomInput style={{ backgroundColor: "rgb(54,31,34)" }} />
                </div>
              </div>
              <div className="submit">
                <CustomButton />
              </div>
            </form>
            <div />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default UserSpecifications;
