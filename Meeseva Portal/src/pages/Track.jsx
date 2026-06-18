import { useState } from "react";

function Track() {

  const [id,setId] = useState("");

  const [result,setResult] =
    useState(null);

  const search = () => {

    const data =
      localStorage.getItem(id);

    if(data){
      setResult(
        JSON.parse(data)
      );
    }
    else{
      alert(
        "No Record Found"
      );
    }
  };

  return (

    <div className="auth-page">

      <div className="form-container">

        <h1>
          Track Application
        </h1>

        <input
          type="text"
          placeholder="Enter Tracking ID"
          onChange={(e)=>
            setId(e.target.value)
          }
        />

        <button
          onClick={search}
        >
          Track
        </button>

        {result && (

          <div
            className="track-box"
          >

            <h2>
              Application Found
            </h2>

            <p>
              Service :
              {result.service}
            </p>

            <p>
              Status :
              {result.status}
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Track;