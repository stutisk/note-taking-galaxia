import {Home } from "./pages/Home/Home"
import {Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";
import {MockAPI} from "./components/Mockman/Mockman"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/MainPage" element={<MainPage />} /> 
      <Route path="/mock" element={<MockAPI/>} /> 

    </Routes> 
    </div>
  );
}

export default App;