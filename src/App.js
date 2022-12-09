import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePerson from "./components/CreatePerson";
import EditPerson from "./components/EditPerson";
import PersonList from "./components/PersonList";

function App() {
  return (
      <div className="container">
        <div className="App">
          <h1>React CRUD</h1>
            <BrowserRouter>
                <Link to="person/create" className="btn btn-primary">Create Person</Link>
                <Routes>
                    <Route index element={<PersonList />} />
                    <Route path="person/create" element={<CreatePerson />} />
                    <Route path="person/:id/edit" element={<EditPerson />} />
                </Routes>
            </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
