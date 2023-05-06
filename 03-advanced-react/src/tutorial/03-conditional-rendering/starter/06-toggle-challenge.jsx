import { useState } from "react";
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  const toggleAlert = () => {};
  return (
    <div>
      <button className="btn" onClick={toggleAlert}>
        toggle
      </button>
      <Alert />
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
