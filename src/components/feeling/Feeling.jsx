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
      <p>How are you feeling today?</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: ADD_FEELING, payload: feeling });
          history.push("/understanding");
        }}
      >
        <input
          type="text"
          name="feeling"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
          id="feeling"
          // required
          placeholder="feeling"
          data-testid="input"
        />
        <button type="submit" data-testid="next">
          Next
        </button>
      </form>
    </>
  );
};

export default Feeling;
