import { useState } from "react";
import { generateTrackingId } from "../components/GenerateId";

function BirthCertificate() {
  const [type, setType] = useState("");
  const [trackingId, setTrackingId] = useState("");

  const submitForm = () => {
    const id = generateTrackingId();

    localStorage.setItem(
      id,
      JSON.stringify({
        service: "Birth Certificate",
        requestType: type,
        status: "Pending",
      })
    );

    setTrackingId(id);
  };

  return (
    <div className="form-container">
      <h1>Birth Certificate Service</h1>

      <input
        type="text"
        placeholder="Applicant Name"
      />

      <input
        type="text"
        placeholder="Phone Number"
      />

      <input type="file" />

      <h3>Select Service Type</h3>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Choose Service</option>

        <option value="new">
          Apply New Birth Certificate
        </option>

        <option value="nameCorrection">
          Child Name Correction
        </option>

        <option value="parentCorrection">
          Parent Name Correction
        </option>

        <option value="dobCorrection">
          Date Of Birth Correction
        </option>

        <option value="duplicate">
          Duplicate Birth Certificate
        </option>

        <option value="addressCorrection">
          Address Correction
        </option>

        <option value="others">
          Others
        </option>
      </select>

      {/* New Certificate */}
      {type === "new" && (
        <>
          <input
            type="text"
            placeholder="Child Name"
          />

          <input
            type="text"
            placeholder="Father Name"
          />

          <input
            type="text"
            placeholder="Mother Name"
          />

          <input type="date" />

          <textarea
            placeholder="Hospital / Birth Place"
          ></textarea>

          <p>
            Physical verification may be required.
          </p>
        </>
      )}

      {/* Child Name Correction */}
      {type === "nameCorrection" && (
        <>
          <input
            type="text"
            placeholder="Old Child Name"
          />

          <input
            type="text"
            placeholder="New Child Name"
          />

          <input
            type="file"
          />
        </>
      )}

      {/* Parent Name Correction */}
      {type === "parentCorrection" && (
        <>
          <input
            type="text"
            placeholder="Existing Parent Name"
          />

          <input
            type="text"
            placeholder="Correct Parent Name"
          />

          <input
            type="file"
          />
        </>
      )}

      {/* DOB Correction */}
      {type === "dobCorrection" && (
        <>
          <input
            type="date"
          />

          <input
            type="date"
          />

          <input
            type="file"
          />
        </>
      )}

      {/* Duplicate Certificate */}
      {type === "duplicate" && (
        <>
          <input
            type="text"
            placeholder="Certificate Number"
          />

          <textarea
            placeholder="Reason for Duplicate Copy"
          ></textarea>
        </>
      )}

      {/* Address Correction */}
      {type === "addressCorrection" && (
        <>
          <textarea
            placeholder="Correct Address"
          ></textarea>

          <input
            type="file"
          />
        </>
      )}

      {/* Others */}
      {type === "others" && (
        <>
          <textarea
            placeholder="Describe Your Request"
          ></textarea>
        </>
      )}

      <br />

      <button onClick={submitForm}>
        Submit Application
      </button>

      {trackingId && (
        <div>
          <h2>
            Tracking ID: {trackingId}
          </h2>
        </div>
      )}
    </div>
  );
}

export default BirthCertificate;