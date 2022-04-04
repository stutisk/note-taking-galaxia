import {Home } from "./pages/Home/Home"
import {Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/MainPage" element={<MainPage />} /> 

    </Routes> 
    </div>
  );
}

export default App;