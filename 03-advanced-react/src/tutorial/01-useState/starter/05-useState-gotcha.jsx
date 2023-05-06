import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    // setValue((currentState) => {
    //   return currentState + 1;
    // });
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
