import React, { useState, useEffect } from "react";

function AgeUpdater({ age }) {
  const [currentAge, setCurrentAge] = useState(age);
  const [newAge, setNewAge] = useState("");

  // Update state if the prop changes
  useEffect(() => {
    setCurrentAge(age);
  }, [age]);

  const updateAge = () => {
    if (newAge !== "") {
      setCurrentAge(Number(newAge));
      setNewAge(""); // clear input
    }
  };

  return (
    <div>
      <h1>Age: {currentAge}</h1>
      <input
        type="number"
        value={newAge}
        placeholder="Enter new age"
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
}

export default AgeUpdater;
