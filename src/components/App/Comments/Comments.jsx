import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_COMMENTS } from "../../../store";

const Comments = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_COMMENTS, payload: comment });
    history.push("/5");
  };
  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="comment"
          required
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default Comments;
