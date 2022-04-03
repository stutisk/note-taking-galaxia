import {Home } from "./pages/Home/Home"
import {Routes, Route} from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";
import {Newnote} from "./pages/Newnote/Newnote"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/MainPage" element={<MainPage />} /> 
      <Route path="/MainPage/Newnote" element={<Newnote />} />  

    </Routes> 
    </div>
  );
}

export default App;