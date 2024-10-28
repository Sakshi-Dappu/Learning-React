import React, { useCallback, useRef, useState } from "react";

export default function Reference() {
  // const refElement = useRef("");
  // const [name, setName] = useState("");
  // const onChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleReset = () => {
  //   setName("");
  //   refElement.current.focus();
  // };
  // const handleInput = () => {
  //   refElement.current.style.color = "blue";
  // };

  // task 2
  // let ref = useRef(0);

  // function handleClick() {
  //  ref.current = ref.current +  1;
  //  alert('Clicked button' + ref.current);
  // }
  /////

  ///task 3////
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const IntervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(IntervalRef.current);
    IntervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(IntervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  ////
  return (
    // <div>
    //   {/* <input
    //     ref={refElement}
    //     type="text"
    //     placeholder="name"
    //     onChange={onChange}
    //     value={name}
    //   />
    //   <br />
    //   <button onClick={handleReset}>Reset</button>
    //   <br />
    //   <button onClick={handleInput}>handle Input</button> */}
    // </div>
    //task 2
    // <div className="task2">
    //   <h2>Task 2</h2>
    //   <button onClick={handleClick}>Click Me</button>
    // </div>
    ///
    <div className="task3">
      <h2>Time Laps: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
