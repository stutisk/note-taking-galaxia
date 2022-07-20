import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { MockAPI } from "./components/Mockman/Mockman";
import { Labelpage } from "./pages/Labelpage/Labelpage";
import { Archievepage } from "./pages/ArchievePage/Archievepage";
import { Profile } from "./pages/Profile/Profile";
import { Trashpage } from "./pages/Trashpage/Trashpage";
import { Login } from "./pages/AuthPage/Login";
import { Signup } from "./pages/AuthPage/Signup";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<MockAPI />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/label" element={<Labelpage />} />
          <Route path="/archieve" element={<Archievepage />} />
          <Route path="/trash" element={<Trashpage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
