import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("alexa");
  return (
    <div>
      <h2>{text || name}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
