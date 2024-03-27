import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginRedirect from "./pages/LoginRedirect";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/loginRedirect" element={<LoginRedirect />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
