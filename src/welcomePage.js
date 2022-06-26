import React, { useContext } from "react";
import "./welcomePage.css";
import { successContext } from "./App";

function WelcomePage() {
  const contextValue = useContext(successContext);
  const username = contextValue[1].username;

  const back = () => {
    window.location.reload();
  };

  return (
    <article className="general-parent">
      <div className="card">
        <div className="check-icon">
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>Your username is {username}</p>
        <button className="dismiss-btn" onClick={back}>
          Dismiss
        </button>
      </div>
    </article>
  );
}

export default WelcomePage;
