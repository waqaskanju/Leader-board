import { baseUrl } from './baseUrl.js';

const createNewGame = async () => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Chess2022',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const createGameResponse = await response.json();
  return createGameResponse;
};
export default createNewGame;