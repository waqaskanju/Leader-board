import { baseUrl, gameId } from './baseUrl.js';

const addNewScore = async (user, score) => {
  const response = await fetch(`${baseUrl}/${gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user, score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const AddScoreResponse = await response.json();
  return AddScoreResponse;
};
export default addNewScore;