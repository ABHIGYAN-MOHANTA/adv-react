import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const func = useState(1)[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>You clicked the button {count} times</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
