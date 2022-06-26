import "./App.css";
import React, { useState } from "react";
import LoginForm from "./loginForm";
import Welcome from "./welcomePage";

export const successContext = React.createContext("");

function App() {
  const [success, setSuccess] = useState(false);

  const toggleSuccess = (childData) => {
    setSuccess(!success);
    setContextValue([...contextValue, childData]);
  };

  const [contextValue, setContextValue] = useState([toggleSuccess]);

  return (
    <successContext.Provider value={contextValue}>
      <div className="parent">
        {!success ? <LoginForm /> : ""}
        {success ? <Welcome /> : ""}
      </div>
    </successContext.Provider>
  );
}

export default App;
