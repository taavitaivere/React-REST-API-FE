import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


export default function PersonList() {
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getPerson();
    }, []);

    function getPerson() {
        axios.get(`http://localhost/reactphp/api/${id}`)
            .then(function (response) {
                console.log(response.data);
                setInputs(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/reactphp/api/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });
    }
    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <h1>Edit User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={inputs.name} className="form-control" name="name" id="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={inputs.email} className="form-control" name="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Avatar</label>
                        <input type="text" value={inputs.avatar} className="form-control" name="avatar" id="avatar" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-2"></div>
        </div>
    )
}
