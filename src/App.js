import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import CreatePerson from "./components/CreatePerson";
import EditPerson from "./components/EditPerson";
import PersonList from "./components/PersonList";
import {io} from "socket.io-client";
import token from "../src/components/EditPerson";
import type {personData} from "./Interfaces/Persons";

function App() {
    const socket = io.connect('http://localhost:3000');

    const [persons, setPersons] = React.useState([]);
    const [createPerson, setCreatePerson] = React.useState(false);
    const [editPerson, setEditPerson] = React.useState(false);
    const handleGetPersons = (data) => {
        socket.emit('get/persons');
        socket.on('get/persons', (data) => {
            setPersons(data);
            localStorage.setItem('persons', JSON.stringify(data));
        });
    }

    const handleCreatePerson = (data) => {
        setCreatePerson(data);
        setEditPerson(!editPerson);
    }

    const handleDeletePerson = (e: React.MouseEvent<HTMLTableDataCellElement>, data : personData) => {
        socket.emit('delete/person', data._id);

    }

    useEffect(() => {
        if (!socket.connected) {
            setPersons(JSON.parse(localStorage.getItem('persons') || '[]'));
        }
        socket.on("connect", () => {
            handleGetPersons();
        });
    }, []);
    return (
        <div className="container">
            <div className="App">
                <h1>React CRUD</h1>
                <BrowserRouter>
                    <Link to="person/create" className="btn btn-primary main-buttons" name="create">Create Person</Link>
                    <Link to="/" className="btn btn-primary main-buttons" name="list">List Person</Link>
                    <Link className="btn btn-primary main-buttons" name="logs">Log List</Link>
                    <Routes>
                        <Route index element={<PersonList socket = { socket }/>} />
                        <Route path="person/create" element={<CreatePerson socket = {socket} token={ token }/>}/>
                        <Route path="person/:id/edit" element={<EditPerson socket={socket}/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
