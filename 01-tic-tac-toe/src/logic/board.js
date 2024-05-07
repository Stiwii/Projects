import { WINNER_COMBINATIONS } from "../constants";

export const checkWinner = (boardToCheck) => {
  //revisamos todas las combinasciones de ganador
  // para ver si x u o gano
  for (const combination of WINNER_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      boardToCheck[a] && // X
      boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> x -> x u o -> o
      boardToCheck[a] === boardToCheck[c]
    ) {
      console.log(boardToCheck[a]);
      return boardToCheck[a]; // x u o
    }
  }
  //sino hay ganados 
  return null;
};

export const checkEndGame = (boardToCheck) => {
  // revisamos si hay un empate
  // si todas las casillas estan llenas
  return boardToCheck.every((square) => square !== null);
};