import React from "react";

const Modal = ({ModalArticle, CloseModal, Article }) => {
  return (
    <>
      <div key={Math.random().toString(36).substring(2, 15)}>
        <h1>{ModalArticle.title}</h1>
        <button onClick={CloseModal}>X</button>
        <p>{ModalArticle.publishedAt}</p>
            <p>{ModalArticle.author}</p>
            <p>{ModalArticle.description}</p>
            <a href={ModalArticle.url}>Veiw</a>
      </div>
    </>
  );
}

export default Modal;

