import React, { useRef, useState } from "react";

export default function Reference() {
  const refElement = useRef("");
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
    
  };
const handleReset = () => {
    setName("");
    refElement.current.focus();
}
const handleInput = () => {
  refElement.current.style.color="blue"
}


  return (
    <div>
      <input ref={refElement}    type="text" placeholder="name" onChange={onChange} value={name} />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <button onClick={handleInput}>handle Input</button>
    </div>
  );
}
