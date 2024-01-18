

const NewsList = ({ Articles }) => {
  const noImg = "../img/no_img.jpg"
  return (
    <div>
      <ul>
        {Articles.map((article) => (
        <li key={Articles.indexOf(article)}>
          <div>
            <img src={ article.urlToImage ?? noImg}></img>
          </div>
          <div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        </li>))}
      </ul>
    </div>
    

  );
}

export default NewsList;