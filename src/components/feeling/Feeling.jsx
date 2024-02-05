import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_FEELING } from "../../store";

const Feeling = () => {
  const [feeling, setFeeling] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <h1>How are you feeling today?</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: ADD_FEELING, payload: feeling });
          history.push("/2");
        }}
      >
        <input
          type="number"
          name="feeling"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
          id="feeling"
          required
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default Feeling;
