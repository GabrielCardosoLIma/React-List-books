import React from 'react';
import { useEffect,useState } from 'react';
import SearchCSS from './Search.module.css';
import axios from 'axios';
import Books from '../Books/Books';

const BooksSearch = () => {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () => {
    const params = {};
      if (search) {
        params.title_like = search;
      }
    axios.get("http://localhost:5001/books", {params})
    .then((response) => {
      // console.log(response.data);
      setBooks(response.data);
     }
    );

}, [search] );

    return ( 
        <>
        <header className={SearchCSS.PromotionSearchHeader}>
          <h1>PROMOÇÃO DE LIVROS</h1>
        </header>
        <input type="search" 
        className={SearchCSS.PromotionSearchInput}
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        />
        {books.map((books) =>(
        <Books books={books} key={books.id}/>
        )
        )
      }
      </>
     );
}
 
export default BooksSearch;