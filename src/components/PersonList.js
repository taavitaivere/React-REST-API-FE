import axios from 'axios';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function PersonList() {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        getPersonList();
    }, []);

    function getPersonList() {
        axios.get('http://localhost/reactphp/api/')
            .then(function (response) {
                console.log(response.data);
                setPersons(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const deletePerson = (id) => {
        axios.delete(`http://localhost/reactphp/api/${id}/delete`).then(function (response) {
            console.log(response.data);
            getPersonList();
        });
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
                    {persons.map((person, index) => (
                            <tr key={index}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>{person.avatar}</td>
                                <td>
                                    <Link to={`/person/${person.id}/edit/`} className="btn btn-primary" style={{marginRight: "10px"}}>Edit</Link>
                                    <button onClick={() => deletePerson(person.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
