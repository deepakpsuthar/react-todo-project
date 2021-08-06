import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from "./functionBased/components/TodoContainer"
import { BrowserRouter as Router } from "react-router-dom"

//stylesheet
import "./functionBased/App.css"

// React provides for us the StrictMode to activate checks and logs a warning message at runtime.
// To enable it, we simply wrap our component with <React.StrictMode> like so:
// ReactDOM.render( <React.StrictMode>
  
//   <TodoContainer />
// </React.StrictMode>, document.getElementById("root"))

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
  document.getElementById("root")
)
