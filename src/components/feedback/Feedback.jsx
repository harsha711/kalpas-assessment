import React from "react";
import "./Feedback.css";

export default function Feedback({ feedbackVal, feedbackSwitch }) {
  return (
    <div>
      <div className="feedbackContainer">
        <h4>Have a Feedback?</h4>
        <button
          className={`feedbackButton btn ${
            feedbackVal ? "closeFeedbackButton" : "feedbackButton"
          }`}
          onClick={() => feedbackSwitch(!feedbackVal)}
        >
          We are Listening!
        </button>
      </div>
    </div>
  );
}
