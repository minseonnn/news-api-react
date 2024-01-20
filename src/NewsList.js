import React, { useEffect, useRef, useState } from "react";
import noImg from "./img/no_img.jpg";
import Modal from "./Modal";

const NewsList = ({ Articles, currentPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalArticle ,setModalArticle] = useState({});
  const closeModal = () => {
    setModalOpen(false);
  }
  const open_modal = (article) => {
    setModalOpen(true);
    setModalArticle(article);
  }

  
  return (
    <div>
      {modalOpen && < Modal key={Math.random().toString(36).substring(2, 15)} ModalArticle = {modalArticle} CloseModal = {closeModal}/>}
      <ul>
        {Articles.map((article,index) =>  (
          <div key={index}>
            <li id={`article-${index}`}>
            <div>
              <img src={ article.urlToImage ?? noImg } alt={article.title} onClick={() => open_modal(article)}></img>
            </div>
            <div>
              <h1 onClick={() => open_modal(article)}>{article.title}</h1>
              <p>{article.description}</p>
            </div>
          </li>
          </div>
        ))}
      </ul>
    </div>
    

  );
}

export default NewsList;