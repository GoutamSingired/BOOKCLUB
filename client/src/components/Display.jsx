import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Display = () => {
const [allBooks, setAllBooks] = useState([]);

useEffect(() => {
    axios.get("http://localhost:4500/books")
    .then((response) => {
        console.log(response.data);
        setAllBooks(response.data);
    })
    .catch((err) => {
        console.log(err.response);
    });
}, []);

return (
    <div className="container">
        <div className="row">
            <div className="text-start container mt-5">
                <h1>Books Show</h1>
            </div>
            <div className="text-end">
                <Link to="/new" className="btn btn-primary btn-sm">Create a New Book</Link>
            </div>
        </div>
        <div className="mt-5 justify-content-center" >
            <table className="table table-bordered justify-content-center">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">Book Title</th>
                        <th scope="col">Book Author</th>
                        <th scope="col">Book Year</th>
                        <th scope="col">Actions</th>
                    </tr>

                </thead>
                <tbody>
                {
                    allBooks.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>
                                <div>
                                    <Link to={"/books/edit/" + book._id}>Edit Book</Link>&nbsp; | &nbsp;
                                    <Link to={"/books/delete/" + book._id}>Delete Book</Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Display;