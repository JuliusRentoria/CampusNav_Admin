import "./App.css";
import Login from "./components/Auth/Login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Auth/Signup/signup";
import Home from "./components/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
