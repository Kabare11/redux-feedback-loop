import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Final = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <h5>Feeling - {state.understanding}</h5>
      <h5>understanding - {state.understanding}</h5>
      <h5>Support - {state.supported}</h5>
      <h5>Comments - {state.comments}</h5>
      <button data-testid="next" onClick={() => history.push("/thank")}>
        Submit feedback
      </button>
    </div>
  );
};

export default Final;
