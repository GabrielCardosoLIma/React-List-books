import React, { useState, useEffect } from "react";
import Books from "../../components/Books/Books";
import axios from "axios";

const PageListBooks = () => {

const [listBooks, setListBooks] = useState([]);

useEffect( () => {
  axios.get("http://localhost:5000/books")
    .then((response) => {
      console.log(response.data);
      setListBooks(response.data);
     }
    );

}, [] );

return (
    <>
      {listBooks.map((books) =>(
        <Books books={books} key={books.id}/>
      )
      )
    }
    </>
  )
}


export default PageListBooks;