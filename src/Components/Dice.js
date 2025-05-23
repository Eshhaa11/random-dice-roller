import { useState } from "react";

import "./Dice.css";

function Dice() {
  const [diceNum, setDiceNum] = useState(1);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNum(randomNum);
  };

  const renderDots = () => {
    const dotPatterns = {
      1: [5],
      2: [1, 9],
      3: [1, 5, 9],
      4: [1, 3, 7, 9],
      5: [1, 3, 5, 7, 9],
      6: [1, 3, 4, 6, 7, 9],
    };

    return [...Array(9)].map((_, i) => (
      <span
        key={i}
        className={`dot ${
          dotPatterns[diceNum].includes(i + 1) ? "active" : ""
        }`}
      ></span>
    ));
   };

  return (
    <div className="dice-cont">
      <h1>🎲 Dice Roller</h1>
      <div className="dice" onClick={rollDice}>
        {renderDots()}
      </div>
      <button onClick={rollDice} className="roll-btn">
        Roll Dice
      </button>
    </div>
  );
}

export default Dice;
