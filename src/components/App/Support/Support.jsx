import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ADD_SUPPORTED } from "../../../store";
import { useDispatch } from "react-redux";

const Support = () => {
  const [supported, setSupported] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_SUPPORTED, payload: supported });
    history.push("/comments");
  };

  return (
    <>
      <h1>How well are you being supported?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="supported"
          value={supported}
          onChange={(e) => setSupported(e.target.value)}
          id="supported"
          required
          data-testid="input"
        />
        <button type="submit" data-testid="next">
          Next
        </button>
      </form>
    </>
  );
};

export default Support;
