import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditBook = (props) => {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const navigate = useNavigate();
    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:4500/books/${id}`)
            .then((response) => {
            console.log(response.data);
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setYear(response.data.year);
        })
            .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:4500/books/${id}`, { title, author, year })
            .then((response) => {
            console.log(response);
            navigate("/")

        })
            .catch((err) => {
            console.log(err.response.data.errors);
            setError(err.response.data.errors);
        });
    };

    return (
        <div className="container p-3 bg-info text-white">
            <div className="text-start container mt-5">
                <h2>Edit a Book</h2>
            </div>
            <div className="text-end">
                <Link to="/" className="btn btn-secondary btn-sm">Go back Home</Link>
            </div>
            
            <form onSubmit={submitHandler}>

                <div className="mb-3">
                    <label class="form-label">Book Title</label>&nbsp;&nbsp;
                    <input type="text" class="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    {error.title ? <p>{error.title.message}</p> : null}
                </div>
                <div className="mb-3">
                    <label class="form-label">Book Author</label>&nbsp;
                    <input type="text" class="form-control" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    {error.author ? <p>{error.author.message}</p> : null}
                </div>
                <div className="mb-3">
                    <label class="form-label">Book Year</label>&nbsp;
                    <input type="text" class="form-control" value={year} onChange={(e) => setYear(e.target.value)}/>
                    {error.year ? <p>{error.year.message}</p> : null}
                </div>&nbsp;&nbsp;

                <div className="text-center">
                    <button type="submit" className="btn btn-success btn-sm" >Save Book</button>
                </div>

            </form>
        </div>    
    );
};

export default EditBook;