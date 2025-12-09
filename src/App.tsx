import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Make sure to import your new page
import TrainingPage from '../src/pages/TrainingPage'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/trainings" element={<TrainingPage />} />
    </Routes>
  );
}

export default App;