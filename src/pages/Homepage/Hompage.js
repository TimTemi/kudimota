import Navigation from "../../components/Navigation/Navigation";
import CarGallery from "../../components/Car Gallery/gallery";
import Footer from "../../components/Footer/Footer";
import ProductCategory from "../../components/product Category/product Category";
import Appinfo from "../../components/AppInfo/appinfo";

const Homepage = () => {
  return (
    <section>
      <Navigation />
      <ProductCategory />
      <Appinfo />
      <CarGallery />
      <Footer />
    </section>
  );
};

export default Homepage;
