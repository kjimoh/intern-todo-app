import React, { useState } from "react";
import { check, cross } from "./images";

const Todo = ({ task, iconToggle, remove }) => {
  const [checkToggle, setCheckToggle] = useState(false);
  const handleCheckToggle = () => {
    setCheckToggle(!checkToggle);
  };

  const style = {
    textDecoration: checkToggle ? "line-through" : "none",
    color: checkToggle ? "grey" : iconToggle ? "#25273c" : "#fafafa",
    background: iconToggle ? "#fafafa" : " #25273c",
  };

  return (
    <div>
      <div className="todo">
        <span className="image">
          {checkToggle ? (
            <img src={check} onClick={handleCheckToggle} />
          ) : (
            <span className="unchecked" onClick={handleCheckToggle}></span>
          )}
        </span>
        <p style={style}>{task}</p>
        <img src={cross} alt="" className="cross" onClick={remove} />
      </div>
    </div>
  );
};

export default Todo;
