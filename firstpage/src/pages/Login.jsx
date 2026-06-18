import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      user &&
      user.name === name &&
      user.password === password
    ) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h1>MeeSeva Login</h1>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;