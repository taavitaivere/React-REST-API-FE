import axios from 'axios';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function PersonList( {socket} ) {
    const navigate = useNavigate();
    const [persons, setPersons] = useState([])

    useEffect(() => {
        getPersonList();
    }, []);

    function getPersonList() {
        socket.emit('get/persons');
        socket.on('get/persons', (data) => {
            setPersons(data);
        });
    }

    const deletePerson = (id) => {
        socket.emit('delete/person', id);
        navigate('/');
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Person List</h1>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                        </tr>
                        </thead>
                        <tbody>
                    {persons.map((persons, index) => (
                            <tr key={index}>
                                <td>{persons.id}</td>
                                <td>{persons.name}</td>
                                <td>{persons.email}</td>
                                <td><img className="img" src={persons.avatar} alt=""/></td>
                                <td>
                                    <Link to={`/person/${persons.id}/edit`} className="btn btn-primary" style={{marginRight: "10px"}}>Edit</Link>
                                    <button onClick={() => deletePerson(persons.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
