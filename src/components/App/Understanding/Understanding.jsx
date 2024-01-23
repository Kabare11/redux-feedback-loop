import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Understanding = () => {
  const [understandingPost, setUnderstandingPost] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: "ADD_FEELING_REVIEW", payload: FeelingPost });
    history.push("/understanding");

    return (
      <>
        <form>
          onSubmit={handleSubmit}
          <h2>How Well Are You Understanding The Content?</h2>
          <input
            onChange={(event) =>
              setUnderstandingPost({ Feeling: event.target.value })
            }
            type="number"
          ></input>
          <button>Next</button>
        </form>
      </>
    );
  };
};
export default Understanding;
