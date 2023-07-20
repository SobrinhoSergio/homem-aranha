import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSection from './MainSection';
import StepForm1 from './Components/SubscribeForm/StepForm1';
import StepForm2 from './Components/SubscribeForm/StepForm2';
import StepForm3 from './Components/SubscribeForm/StepForm3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/stepform1" element={<StepForm1 />} />
        <Route path="/stepform2" element={<StepForm2 />} />
        <Route path="/stepform3" element={<StepForm3 />} />
      </Routes>
    </Router>
  );
}

export default App;
