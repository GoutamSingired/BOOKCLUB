import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [error, setError] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook= {title, author, year }
        axios.post("http://localhost:4500/book/new", { newBook })
            .then((response) => {
            console.log(response);
            navigate("/");
        })
            .catch((err) => {
            console.log(err.response.data.errors);
            setError(err.response.data.errors);
        });
    };

    return (
        <div className="container p-3 bg-dark text-white">
            <div className="text-start container mt-5">
                <h2>Create a Book</h2>
            </div>    
            
            <div className="text-end">
                <Link to="/" className="btn btn-secondary btn-sm">Go back Home</Link>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label class="form-label">Book Title: </label>
                    <input type="text" class="form-control" onChange={(e) => setTitle(e.target.value)} />
                    {
                        error.title ? <p>{error.title.message}</p> : null
                    }
                </div>&nbsp;
                <div className="mb-3">
                    <label class="form-label">Book Author: </label>
                    <input type="text" class="form-control" onChange={(e) => setAuthor(e.target.value)} />
                    {
                        error.author ? <p>{error.author.message}</p> : null
                    }
                </div>&nbsp;
                <div className="mb-3">
                    <label class="form-label">Book Year: </label>
                    <input type="text" class="form-control" onChange={(e) => setYear(e.target.value)} />
                    {
                        error.year ? <p>{error.year.message}</p> : null
                    }
                </div>&nbsp;&nbsp;
                <div className="text-center">
                    <button type="submit" className="btn btn-success btn-sm" >Create a Book</button>
                </div>
                
            </form>
        </div>
    );
};

export default Form;