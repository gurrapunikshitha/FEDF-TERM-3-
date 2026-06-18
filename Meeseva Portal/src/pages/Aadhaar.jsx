import { useState } from "react";
import { generateTrackingId } from "../components/GenerateId";

function Aadhaar() {
  const [type, setType] = useState("");
  const [trackingId, setTrackingId] = useState("");

  const submitForm = () => {
    const id = generateTrackingId();
    setTrackingId(id);

    localStorage.setItem(
      id,
      JSON.stringify({
        service: "Aadhaar",
        updateType: type,
        status: "Pending",
      })
    );
  };

  return (
    <div>
      <h1>Aadhaar Service</h1>

      <input type="text" placeholder="Full Name" />

      <input type="text" placeholder="Phone Number" />

      <input type="file" />

      <h3>Select Service</h3>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Choose</option>
        <option value="number">Update Mobile Number</option>
        <option value="address">Update Address</option>
        <option value="photo">Update Photo</option>
        <option value="others">Others</option>
        <option value="new">Apply New Aadhaar</option>
      </select>

      {type === "number" && (
        <>
          <h3>New Mobile Number</h3>
          <input
            type="text"
            placeholder="Enter New Mobile Number"
          />
        </>
      )}

      {type === "address" && (
        <>
          <h3>New Address</h3>

          <textarea
            placeholder="Enter New Address"
          ></textarea>

          <input
            type="file"
          />
        </>
      )}

      {type === "photo" && (
        <>
          <h3>Photo Update</h3>

          <p>
            Physical appearance required at
            MeeSeva Center.
          </p>
        </>
      )}

      {type === "others" && (
        <>
          <textarea
            placeholder="Describe your issue"
          ></textarea>
        </>
      )}

      {type === "new" && (
        <>
          <p>
            New Aadhaar application requires
            physical verification at MeeSeva
            center.
          </p>
        </>
      )}

      <br />
      <br />

      <button onClick={submitForm}>
        Submit
      </button>

      {trackingId && (
        <h2>
          Generated Tracking ID:
          {trackingId}
        </h2>
      )}
    </div>
  );
}

export default Aadhaar;