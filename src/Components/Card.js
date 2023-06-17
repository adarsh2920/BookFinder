import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail;
        const amount = item.saleInfo?.listPrice?.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div className="card" onClick={() => handleCardClick(item)} key={item.id}>
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
              </div>
            </div>
          );
        }
        
        return null;
      })}
      
      <Modal show={showModal} item={selectedBook} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Card;
