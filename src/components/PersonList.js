import axios from 'axios';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function PersonList() {
    const navigate = useNavigate();
    const [persons, setPersons] = useState([])

    useEffect(() => {
        getPersonList();
    }, []);

    function getPersonList() {
        axios.get('https://63274caeba4a9c475334aec1.mockapi.io/crud')
            .then(function (response) {
                setPersons(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deletePerson = (id) => {

        axios.delete(`https://63274caeba4a9c475334aec1.mockapi.io/crud/${id}`).then(function (response) {
            console.log(response.data);
            getPersonList();
        });
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
