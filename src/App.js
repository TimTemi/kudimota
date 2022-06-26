import {Route, Routes} from 'react-router-dom';
import Homepage  from './pages/Homepage/Hompage';
import PredictValue from './pages/PredictValue/PredictValue';
import UserSpecifications from './pages/UserSpecification/UserSpecifications'
import {path} from './routes'

function App() {
  return (
    <Routes>
      <Route exact path={path.homepage} element={<Homepage />} />
      <Route exact path={path.carSpecification} element={<UserSpecifications />} />
      <Route exact path={path.perdictedCar} element={<PredictValue />} />
    </Routes>
  );
  
}

export default App; 
