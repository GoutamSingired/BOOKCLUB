import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const DeleteBook = (props) => {
    const { id} = useParams();
    const [allBooks, setAllBooks] = useState([]);
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

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

    const handleDeleteBook = (id) => {
        axios.delete(`http://localhost:4500/books/${id}`)
            .then((response) => {
            console.log("Books is successfully deleted");
            console.log(response);
            navigate("/")
            const filteredBooks = allBooks.filter((book) => {
                return book._id !== id;
            });
            setAllBooks(filteredBooks);
        })
            .catch((err) => {   
            console.log("The err is", err.response);
        });
    };

    return(
        <div className="container">&nbsp;
            <div className="text-start container mt-5">
                <h2>Delete a Book</h2>
            </div>
            
            <div className="text-end">
                <Link to="/" className="btn btn-secondary btn-sm">Go back Home</Link>
            </div>&nbsp;

            <div className="alert alert-success" role="alert">&nbsp;
                <div className="text-center">
                    <p>Are you sure? You want to delete this Book called<h3>{title}</h3></p>
                    <button type="submit" className="btn btn-danger btn-sm" onClick={() => handleDeleteBook(id)}>Delete Book</button>
                </div>
            </div>
        </div>    
    );
};

export default DeleteBook;