import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React from "react";
import CreatePerson from "./components/CreatePerson";
import EditPerson from "./components/EditPerson";
import PersonList from "./components/PersonList";

function App() {

    return (
        <div className="container">
            <div className="App">
                <h1>React CRUD</h1>
                <BrowserRouter>
                    <Link to="person/create" className="btn btn-primary main-buttons" name="create">Create Person</Link>
                    <Link to="/" className="btn btn-primary main-buttons" name="list">List Person</Link>
                    <Link className="btn btn-primary main-buttons" name="logs">Log List</Link>
                    <Routes>
                        <Route path="/" element={<PersonList/>}/>
                        <Route path="/person/create" element={<CreatePerson/>}/>
                        <Route path="person/:id/edit" element={<EditPerson/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
