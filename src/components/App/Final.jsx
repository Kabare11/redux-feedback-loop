import React from "react";
import { useSelector } from "react-redux";

const Final = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <h5>Feeling - {state.understanding}</h5>
      <h5>understanding - {state.understanding}</h5>
      <h5>Support - {state.supported}</h5>
      <h5>Comments - {state.comments}</h5>
      <button>Submit feedback</button>
    </div>
  );
};

export default Final;
