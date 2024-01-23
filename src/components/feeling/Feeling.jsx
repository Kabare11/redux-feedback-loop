import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Feeling = () => {
  const [FeelingPost, setFeelingPost] = useState({});

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
          <h2>How Are You Feeling?</h2>
          <input
            onChange={(event) =>
              setFeelingPost({ Feeling: event.target.value })
            }
            type="number"
          ></input>
          <button>Next</button>
        </form>
      </>
    );
  };
};
export default Feeling;
