const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const spanDate = document.createElement('span');
  const titleText = document.createElement('h1');
  const spanTemp = document.createElement('span');

  spanDate.textContent = date;
  titleText.textContent = title;
  spanTemp.textContent = temp;

  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(titleText);
  headerDiv.appendChild(spanTemp);

  headerDiv.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  return headerDiv;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}


const headerAppender = (selector) => {
  const headerContainer = document.querySelector(selector);
  const newHeader = Header('ETH is money', '12/3', '65');
  headerContainer.appendChild(newHeader);


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

// if you could please tell me why running this headerAppender('div.header-container'); gives me an error that appendChild reads null, that would be much appreciated thank you

export { Header, headerAppender }
