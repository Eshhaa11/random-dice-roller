import   useState  from "react";
import "./Dice.css";

function Dice () {
    const[diceNum, setDiceNum] = useState(1);

    const rollDice = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setDiceNum(randomNum);
      };

      const renderDots = () => {
        const dotPattern = {
            1: [5],
            2: [1, 9],
            3: [1, 5, 9],
            4: [1, 3, 7, 9],
            5: [1, 3, 5, 7, 9],
            6: [1, 3, 4, 6, 7, 9],
          };
      
}