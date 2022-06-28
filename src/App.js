import { Route, Routes } from "react-router-dom";
import CarGallery from "./components/Car Gallery/gallery";
import Homepage from "./pages/Homepage/Hompage";
import PredictValue from "./pages/PredictValue/PredictValue";
import UserSpecifications from "./pages/UserSpecification/UserSpecifications";
import { path } from "./routes";

function App() {
  return (
    <Routes>
      <Route exact path={path.homepage} element={<Homepage />} />
      <Route
        exact
        path={path.carSpecification}
        element={<UserSpecifications />}
      />
      <Route exact path={path.perdictedCar} element={<PredictValue />} />
      <Route path={path.gallery} element={<CarGallery />} />
    </Routes>
  );
}

export default App;
