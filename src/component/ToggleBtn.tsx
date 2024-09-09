import { useState } from "react";

const ToggleButton = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleToggle = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <button
      className={`btn p-5 ${isEnglish ? "btn-accent" : ""}`}
      onClick={handleToggle}
    >
      {isEnglish ? "EN" : "AR"}
    </button>
  );
};

export default ToggleButton;
