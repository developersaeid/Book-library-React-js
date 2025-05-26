import { useState } from "react";

import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";

import Styles from "./Books.module.css";

function Books() {
  const [liked, setLiked] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id); // remove book from liked list
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]); // add book to liked list
    }
  };

  return (
    <div className={Styles.container} >
      <div className={Styles.cards} >
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
  );
}

export default Books;
