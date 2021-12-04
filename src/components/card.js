import axios from 'axios';

const Card = (article) => {
  const cardWrapper = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  headlineDiv.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  cardWrapper.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');

  cardWrapper.appendChild(headlineDiv);
  cardWrapper.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  authorDiv.appendChild(authorName);
  imgContainer.appendChild(authorImg);

  cardWrapper.addEventListener('click', () => {
    console.log(article.headline);
  })
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardWrapper;
}



const cardAppender = (selector) => {
  const cardEntry = document.querySelector(selector);
  axios.get('http://localhost:5001/api/articles')
  .then(resp => {
    console.log(resp.data.articles);
    resp.data.articles.bootstrap.forEach(article => {
      cardEntry.appendChild(Card(article));
    });
    resp.data.articles.javascript.forEach(article => {
      cardEntry.appendChild(Card(article));
    });
    resp.data.articles.jquery.forEach(article => {
      cardEntry.appendChild(Card(article));
    });
    resp.data.articles.node.forEach(article => {
      cardEntry.appendChild(Card(article));
    });
    resp.data.articles.technology.forEach(article => {
      cardEntry.appendChild(Card(article));
    });
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    console.log('almost thar');
  });

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}



export { Card, cardAppender }
