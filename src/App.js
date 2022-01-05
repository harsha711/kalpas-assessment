import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import React, { useState } from "react";

function App() {
  const [toggleVal, setToggleVal] = useState(false);
  const [feedbackVal, setFeedbackVal] = useState(false);
  const handleToggleSwitch = (val) => {
    setToggleVal(val);
  };
  const handleFeedbackSwitch = (val) => {
    setFeedbackVal(val);
  };
  return (
    <div className="app">
      <Sidebar
        toggleVal={toggleVal}
        toggleSwitch={handleToggleSwitch}
        feedbackVal={feedbackVal}
        feedbackSwitch={handleFeedbackSwitch}
      />
      <Feed toggleVal={toggleVal} feedbackVal={feedbackVal} />
    </div>
  );
}

export default App;
