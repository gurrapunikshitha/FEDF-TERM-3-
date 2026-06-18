import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import {
  FaIdCard,
  FaCertificate,
  FaFileSignature
} from "react-icons/fa";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <h1 className="home-title">
        MeeSeva Citizen Portal
      </h1>

      <p className="subtitle">
        Fast • Transparent • Digital Services
      </p>

      <div className="cards">

        <div
          className="card"
          onClick={() => navigate("/aadhaar")}
        >
          <FaIdCard className="card-icon" />
          <h2>Aadhaar Services</h2>

          <p>
            Mobile Update,
            Address Update,
            New Aadhaar
          </p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/birth")}
        >
          <FaCertificate className="card-icon" />
          <h2>Birth Certificate</h2>

          <p>
            New Certificate,
            Corrections,
            Duplicate Copy
          </p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/ews")}
        >
          <FaFileSignature className="card-icon" />
          <h2>EWS Certificate</h2>

          <p>
            New Application
            & Updates
          </p>
        </div>

      </div>
    </>
  );
}

export default Home;