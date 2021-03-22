import React, { useState, useCallback, useEffect } from "react";

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  //   const spanRef = useRef();

  const [state, setState] = useState("hello");
  const [name, setName] = useState("");

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  const changeState = () => {
    setState("Goodbye");
  };

  const changeName = () => {
    setName("Nani");
  };

  useEffect(() => {
    console.log("렌더링 됬다");
    console.log({
      state,
      name,
    });
  });

  useEffect(() => {
    console.log(`mounter & upadated: ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <div>
        <h2 value={state} />
        <button onClick={changeState} />
        <h2 value={name} />
        <button onClick={changeName} />
      </div>

      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
