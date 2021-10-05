const ele = document.getElementById('p');

const splitWords = ele.innerHTML.split(' ');


const highlightedWords = splitWords.map((word) =>
  word.length >=8 ? `<span class="highlight">${word}</span>` : word
);

const joinedWords = highlightedWords.join(' ')

ele.innerHTML = joinedWords;