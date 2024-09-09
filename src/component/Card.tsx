import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import Login from "./Login";

function Card() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const darkModeHandler = () => {
    setDark(prevDark => !prevDark);
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <button
        onClick={darkModeHandler}
        className="p-2 m-4 rounded-full border-2 border-gray-500"
        aria-label="Toggle dark mode"
      >
        {dark ? <IoSunny /> : <IoMoon />}
      </button>
      <Login/>
    </div>
  );
}

export default Card;
