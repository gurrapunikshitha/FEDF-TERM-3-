import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Aadhaar from "./pages/Aadhaar";
import BirthCertificate from "./pages/BirthCertificate";
import EWS from "./pages/EWS";
import Track from "./pages/Track";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aadhaar" element={<Aadhaar />} />
      <Route path="/birth" element={<BirthCertificate />} />
      <Route path="/ews" element={<EWS />} />
      <Route path="/track" element={<Track />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;