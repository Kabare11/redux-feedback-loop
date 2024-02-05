import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ADD_UNDERSTANDING } from "../../../store";

const Understanding = () => {
  const [understandingPost, setUnderstandingPost] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_UNDERSTANDING, payload: understandingPost });
    history.push("/3");
  };
  return (
    <>
      <h1>How are you understanding the content?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="understandingPost"
          value={understandingPost}
          onChange={(e) => setUnderstandingPost(e.target.value)}
          required
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
};
export default Understanding;
