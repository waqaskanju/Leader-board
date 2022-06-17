import { baseUrl, gameId } from './baseUrl.js';

const getScore = async () => {
  const score = await fetch(`${baseUrl}/${gameId}/scores/`);
  const jsonScore = await score.json();
  return jsonScore.result;
};
export default getScore;