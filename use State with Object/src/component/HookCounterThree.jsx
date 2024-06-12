import React from "react";
import { useState } from "react";
function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({...name, lastname: e.target.value })}
      />
      <h2>
        Your Name is {name.firstName} {name.lastName}
      </h2>
    </div>
  );
}

export default HookCounterThree;
