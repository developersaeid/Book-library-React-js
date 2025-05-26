import { useState } from "react";

import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

import Styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id); // remove book from liked list
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]); // add book to liked list
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLocaleLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />
      <div className={Styles.container}>
        <div className={Styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={Styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
