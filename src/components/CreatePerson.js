import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function PersonList( {socket} ) {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        socket.emit('create/person', inputs);
        navigate('/');
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Create Person</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" id="name" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Avatar</label>
                        <input type="text" className="form-control" name="avatar" id="avatar" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-12"></div>
        </div>
    )
}
