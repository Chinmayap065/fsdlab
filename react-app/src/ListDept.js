import React from "react";

function List() {
  const deptlist = ["C", "i", "e"];

  return (
    <div>
      <h2>Department</h2>
      <ul>
        {deptlist.map((dept) => (
          <li key={dept}>{dept}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
