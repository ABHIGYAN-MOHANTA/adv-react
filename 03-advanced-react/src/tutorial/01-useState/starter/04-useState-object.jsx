import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(28);
  // const [hobby, setHobby] = useState("Watching movies");
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setName("john");
    // setAge(30);
    // setHobby("Listening to music");
    // setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
    setPerson({ ...person, hobby: "scream at the computer" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </div>
  );
};

export default UseStateObject;
