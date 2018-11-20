import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import StackForm from "./components/form/StackForm";

const App = props => {
  const fields = [
    {
      type: "legent",
      label: "Test label",
      fields: [
        {
          type: "text",
          label: "LastName",
          placeholder: "Fill your last name here"
        }
      ]
    },
    {
      type: "text",
      label: "FirstName",
      placeholder: "Fill your first name here",
      css: []
    },
    {
      type: "text",
      label: "LastName",
      placeholder: "Fill your last name here"
    },
    {
      type: "email",
      label: "Email",
      placeholder: "Fill your email name here"
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <StackForm fields={fields} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
