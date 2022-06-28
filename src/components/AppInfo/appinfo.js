import { infodatas } from "../../utils/Infodata";
import car from "../../assets/toyotaPreview.png";
import eclipse from "../../assets/Ellipse.png";
import { Link } from "react-router-dom";
// import { path } from "../../routes";
import "./appinfo.css";

const Appinfo = () => {
  return (
    <section style={{ position: "relative" }}>
      <h1 className="componentTitle">What you can do?</h1>
      <div className="appinfo">
        {infodatas.map((infodata) => {
          return (
            <div
              key={infodata.id}
              style={{
                width: `${infodata.width}`,
                backgroundColor: "#31191b",
                margin: `${infodata.margin}`,
                padding: `${infodata.padding}`,
                height: `${infodata.height}`,
              }}
            >
              <Link
                to={infodata.Link}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <h1 className="number">{infodata.number}</h1>

                <h3 className="title">{infodata.title}</h3>
                <div className="boxB">
                  <p className="body">{infodata.body}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div
        className="downLayer"
        style={{ right: "-20%", position: "absolute", bottom: "-12%" }}
      >
        <div className="boxC">
          <img src={car} alt="car" className="car" />
        </div>
        <div className="boxE">
          <img src={eclipse} alt="eclipse" className="eclipse" />
        </div>
      </div>
    </section>
  );
};

export default Appinfo;
