import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import React from "react";

function App() {

  return (
      <div className="container">
        <div className="App">
          <h1>React CRUD</h1>
            <BrowserRouter>
                    <Link className="btn btn-primary main-buttons" name="create">Create Person</Link>
                    <Link className="btn btn-primary main-buttons" name="list">List Person</Link>
                    <Link className="btn btn-primary main-buttons" name="logs">Log List</Link>
            </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
