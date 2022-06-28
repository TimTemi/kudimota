import Car from "../../assets/Car Gallery.png";
import previous from "../../assets/previous.png";
import next from "../../assets/next.png";
import { galleryDatas } from "../../utils/galleryData";
import "./gallery.css";

function CarGallery() {
  return (
    <section className="Gallery">
      <div className="Gallery-Title">
        <img src={Car} alt="carGallery" />
        <h1 style={{ position: "absolute", top: "2.6rem", color: "#f5f5f5" }}>
          Car Gallery
        </h1>
      </div>
      {/* Car Gallery Section 
   maps data from galleryData in utils folder
   Dynamic Card Component
   */}

      <div className="card">
        {galleryDatas.map((galleryData) => {
          return (
            <div className="product" key={galleryData.id}>
              <div className="product-image">
                <img
                  src={galleryData.iamge}
                  alt="carImage"
                  style={{
                    width: "65%",
                  }}
                />
              </div>
              <div className="product-body">
                <h4 style={{ color: "#f5f5f5" }}>{galleryData.carName}</h4>
                <p className="carinfo">{galleryData.carInfo}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Pagination */}
      <div className="pages">
        <div className="pagination">
          <img src={previous} alt="previous" />
          <p>123....10</p>
          <img src={next} alt="next" />
        </div>
      </div>
    </section>
  );
}

export default CarGallery;
