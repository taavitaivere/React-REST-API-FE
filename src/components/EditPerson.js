import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


export default function PersonList( {socket} ) {
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getPerson();
    }, []);

    function getPerson() {
        axios.get(`http://localhost:3000/persons/${id}`)
            .then(function (response) {
                console.log(response.data);
                setInputs(response.data);
            })
            .catch(error => {
                console.log(error);
             });
    }

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        avatar: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:3000/persons/${id}`, inputs)
            .then(function (response) {
            console.log(response.data);
        });
        navigate('/');
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Edit Person</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" id="name" value={inputs.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" id="email" value={inputs.email} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Avatar</label>
                        <input type="text" className="form-control" name="avatar" id="avatar" value={inputs.avatar} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-12"></div>
        </div>
    )
}
