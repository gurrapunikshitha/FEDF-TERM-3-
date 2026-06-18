import { useState } from "react";
import { generateTrackingId } from "../components/GenerateId";

function EWS() {
  const [type, setType] = useState("");
  const [trackingId, setTrackingId] = useState("");

  const submitForm = () => {
    const id = generateTrackingId();

    localStorage.setItem(
      id,
      JSON.stringify({
        service: "EWS Certificate",
        requestType: type,
        status: "Pending",
      })
    );

    setTrackingId(id);
  };

  return (
    <div className="form-container">
      <h1>EWS Certificate Service</h1>

      <input
        type="text"
        placeholder="Applicant Name"
      />

      <input
        type="text"
        placeholder="Phone Number"
      />

      <h3>Select Service Type</h3>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Choose Service</option>

        <option value="new">
          Apply New EWS Certificate
        </option>

        <option value="update">
          Update Existing EWS Certificate
        </option>
      </select>

      {/* Apply New */}
      {type === "new" && (
        <div>
          <h3>New EWS Application</h3>

          <p>
            Physical appearance is mandatory at the
            MeeSeva Center for verification and
            document submission.
          </p>

          <input
            type="text"
            placeholder="Aadhaar Number"
          />

          <input
            type="text"
            placeholder="Occupation"
          />

          <input
            type="text"
            placeholder="Annual Family Income"
          />
        </div>
      )}

      {/* Update */}
      {type === "update" && (
        <div>
          <h3>Update Existing EWS Certificate</h3>

          <input
            type="text"
            placeholder="Certificate Number"
          />

          <select>
            <option>Select Update Type</option>
            <option>Income Update</option>
            <option>Address Update</option>
            <option>Name Correction</option>
            <option>Other Update</option>
          </select>

          <textarea
            placeholder="Enter Updated Details"
          ></textarea>

          <input type="file" />

          <p>
            Upload existing EWS certificate and
            supporting documents.
          </p>
        </div>
      )}

      <br />

      <button onClick={submitForm}>
        Submit Application
      </button>

      {trackingId && (
        <div>
          <h2>
            Generated Tracking ID: {trackingId}
          </h2>

          <p>
            Use this ID to track your application
            status.
          </p>
        </div>
      )}
    </div>
  );
}

export default EWS;