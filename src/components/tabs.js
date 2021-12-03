const topicsArr = ['javascript', 'bootstrap', 'technology']

const Tabs = (topics) => {
  const topicWrapper = document.createElement('div');
  const jsDiv = document.createElement('div');
  const bootDiv = document.createElement('div');
  const techDiv = document.createElement('div');

  for(let i=0; i<topics.length; i++){
    jsDiv.textContent = topics[0];
    bootDiv.textContent = topics[1];
    techDiv.textContent = topics[2];
  }

  topicWrapper.classList.add('topics');
  jsDiv.classList.add('tab');
  bootDiv.classList.add('tab');
  techDiv.classList.add('tab');

  topicWrapper.appendChild(jsDiv);
  topicWrapper.appendChild(bootDiv);
  topicWrapper.appendChild(techDiv);

  return topicWrapper;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

console.log(Tabs(topicsArr));

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
