import './style.css';

const loadData = () => {
  const scoreBoard = document.getElementById('score-board');
  scoreBoard.innerHTML = '<li> Name 100 </li> <li> Name 80</li><li> Name 600</li><li> Name 50</li><li> Name 40</li>';
};

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', loadData);