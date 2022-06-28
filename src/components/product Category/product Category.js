import Toyota from "../../assets/toyotaLogo.png";
import Rectangle from "../../assets/Rectangle30.png";
import left from "../../assets/VectorL.png";
import right from "../../assets/VectorR.png";
import car from "../../assets/toyotaPreview.png";
import eclipse from "../../assets/Ellipse.png";

import "./product Category.css";

function ProductCategory() {
  return (
    <section className="section">
      <h1 className="componentTitle">Product Categories</h1>
      <div className="topLayer">
        <div className="boxL">
          <img src={Toyota} alt="productLogo" className="pLogo" />
          <h3 className="toyota">Toyota</h3>
        </div>
        <div className="boxR">
          <img src={Rectangle} alt="Rectangle" className="divide" />
        </div>
        <div className="boxI">
          <p className="info">
            Toyota offers 6 car models in india, including 1 car in Sedan
            category, 1 car in Hatchback category,2 cars in MUV category, 1 car
            in Compact SUV category, Toyota has 4 upcoming cars in India,Belta,
            Rumion, Hilux and Hyryder
          </p>
        </div>
        <div className="NavIcon">
          <img src={left} alt="navigationvectors" />
          <img src={right} alt="navigationvectors" />
        </div>
      </div>
      <div className="downLayer">
        <div className="boxC">
          <img src={car} alt="car" className="car" />
        </div>
        <div className="boxE">
          <img src={eclipse} alt="eclipse" className="eclipse" />
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;
