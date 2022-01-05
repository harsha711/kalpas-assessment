import React from "react";
import "./Sidebar.css";
import Feedback from "../feedback/Feedback";
import Profile from "../profile/Profile";
import Toggle from "../toggle/Toggle";
import FeedbackForm from "../feedback/FeedbackForm";

export default function Sidebar({
  toggleVal,
  toggleSwitch,
  feedbackVal,
  feedbackSwitch,
}) {
  return (
    <div className={"sidebar"}>
      <div className="sidebarWrapper">
        <div className="sidebarContainer">
          <Profile />
        </div>
        {!feedbackVal && (
          <div className="sidebarContainer">
            <Toggle toggleVal={toggleVal} toggleSwitch={toggleSwitch} />
          </div>
        )}
        <div className="sidebarContainer">
          <Feedback feedbackVal={feedbackVal} feedbackSwitch={feedbackSwitch} />
        </div>
      </div>
      {feedbackVal && <FeedbackForm />}
    </div>
  );
}
