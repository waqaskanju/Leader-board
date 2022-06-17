/* import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js'; */
import './style.css';
import addNewScore from '../modules/addScore.js';
import getScore from '../modules/getScore.js';

/* Refresh Button */
const btnRefreshScore = document.getElementById('refresh');

/* Load Data */
const scoresUsers = document.getElementById('score-board');

/* Form Data */
const User = document.getElementById('name');
const Score = document.getElementById('score');

/* Form Button */
const btnAddScore = document.getElementById('addScore');

const addScore = () => {
  if (User.value && Score.value) {
    addNewScore(User.value, Number(Score.value));
  }
  User.value = '';
  Score.value = '';
};

const renderScores = () => {
  const userScore = getScore();
  scoresUsers.innerHTML = '';
  userScore.then((scores) => {
    scores.sort((a, b) => b.score - a.score);
    scores.forEach((individual) => {
      scoresUsers.innerHTML += `<li> 
      <span class="m-r-1">  ${individual.user} </span>
      <span> ${individual.score} </span> </li>`;
    });
  });
};

btnAddScore.addEventListener('click', addScore);
btnRefreshScore.addEventListener('click', renderScores);