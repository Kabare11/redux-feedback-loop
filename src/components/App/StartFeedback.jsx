import React from "react";
import { Link } from "react-router-dom";

const StartFeedback = () => {
  return (
    <Link to="/feeling">
      <button data-testid="next">Start feedback</button>
    </Link>
  );
};

export default StartFeedback;
