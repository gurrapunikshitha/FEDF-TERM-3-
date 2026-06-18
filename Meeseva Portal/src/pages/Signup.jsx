import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  });

  const submit = (e) => {

    e.preventDefault();

    if(
      !/^[A-Za-z ]+$/.test(user.name)
    ){
      return alert(
        "Only alphabets allowed"
      );
    }

    if(
      !/^[6-9]\d{9}$/.test(user.phone)
    ){
      return alert(
        "Phone should contain 10 digits"
      );
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Signup Successful");

    navigate("/login");
  };

  return (

    <div className="auth-page">

      <form
        className="form-container"
        onSubmit={submit}
      >

        <h1>Signup</h1>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e)=>
            setUser({
              ...user,
              name:e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>
            setUser({
              ...user,
              email:e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e)=>
            setUser({
              ...user,
              phone:e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>
            setUser({
              ...user,
              password:e.target.value
            })
          }
        />

        <button>
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;