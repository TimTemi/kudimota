import CustomInput from "../../components/CustomInput/Custom-Input";
import CustomButton from "../../components/CustomButtton/Custom-button";
import kudimota from "../../assets/kudimota33.png";
import Footer from "../../components/Footer/Footer";
import ruby from "../../assets/toyotaRed.png";
import blue from "../../assets/toyotaBlue.png";
import black from "../../assets/toyotaBlack.png";
import model from "../../assets/toyotacamry.png";
import boxr from "../../assets/ruby.png";
import boxbl from "../../assets/blue.png";
import boxb from "../../assets/black.png";
import "./UserSpecifications.css";

const UserSpecifications = () => {
  return (
    <section className="uspec">
      <div className="parent">
        {/* could be modified to a dynamic list 
      component mapping thru the structure */}
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
            {/* Input Car Specifications area */}
            <form className="data">
              <div className="input">
                <div className="left">
                  <div className="one">
                    <h2>Toyota Camry</h2>
                    <p className="side_2P">Beautiful and Bold</p>
                  </div>
                  <label
                    style={{
                      display: "flex",
                      color: "white",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    Car Name
                    <CustomInput
                      style={{
                        backgroundColor: "rgb(54,31,34)",
                        position: "absolute",
                        top: "0.7em",
                        right: "-1.2em",
                        width: "100%",
                      }}
                    />
                  </label>
                  <label
                    style={{
                      display: "flex",
                      color: "white",
                      flexDirection: "column",
                      marginTop: "2rem",
                      position: "relative",
                    }}
                  >
                    Gear Type
                    <CustomInput
                      style={{
                        backgroundColor: "rgb(54,31,34)",
                        position: "absolute",
                        top: "0.7em",
                        right: "-1.2em",
                        width: "100%",
                      }}
                    />
                  </label>
                  <label
                    style={{
                      display: "flex",
                      color: "white",
                      marginTop: "2rem",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    Fuel Type
                    <CustomInput
                      style={{
                        backgroundColor: "rgb(54,31,34)",
                        position: "absolute",
                        top: "0.7em",
                        right: "-1.2em",
                        width: "100%",
                      }}
                    />
                  </label>
                </div>
                <div className="right">
                  <div className="two">
                    <p className="side_2P">
                      Toyota camry is a consectetur adipisicing elit. Fugiat,
                      labore modi ab officia rem aliquam eius minus neque unde
                      dignissimos
                    </p>
                  </div>
                  <label
                    style={{
                      display: "flex",
                      color: "white",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    Brand
                    <CustomInput
                      style={{
                        backgroundColor: "rgb(54,31,34)",
                        position: "absolute",
                        top: "0.7em",
                        right: "-1.2em",
                        width: "100%",
                      }}
                    />
                  </label>
                  <label
                    style={{
                      display: "flex",
                      color: "white",
                      flexDirection: "column",
                      marginTop: "2rem",

                      position: "relative",
                    }}
                  >
                    Mileage
                    <CustomInput
                      style={{
                        backgroundColor: "rgb(54,31,34)",
                        position: "absolute",
                        top: "0.7em",
                        right: "-1.2em",
                        width: "100%",
                      }}
                    />
                  </label>
                  <label
                    style={{
                      display: "flex",
                      color: "white",
                      flexDirection: "column",
                      position: "relative",
                      marginTop: "2rem",
                    }}
                  >
                    Engine size
                    <CustomInput
                      style={{
                        backgroundColor: "rgb(54,31,34)",
                        position: "absolute",
                        top: "0.7em",
                        right: "-1.2em",
                        width: "100%",
                      }}
                    />
                  </label>
                </div>
              </div>
              {/* submit inputs for prediction */}
              <div className="submit">
                <CustomButton
                  title="Predict Price"
                  style={{
                    padding: "0.5em 1em",
                    width: "20%",
                  }}
                />
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
