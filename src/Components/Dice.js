import   useState  from "react";
import "./Dice.css";

function Dice () {
    const[diceNum, setDiceNum] = useState(1);

    const rollDice = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setDiceNum(randomNum);
      };
}