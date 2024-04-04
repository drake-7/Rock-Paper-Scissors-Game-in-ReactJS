import React, {Component} from "react";
import './Game.css';
 
class Game extends Component{
    constructor(props) {
        super(props)
        this.state = {
            playerVal : null,
            computerVal : null,
            playerScore: 0,
            compScore: 0,
            resultMessage: 'Result:'
        };
    }
    logic = (playerVal, computerVal)=>{
        if(playerVal == computerVal){
            return 0; // Tie
        } else if ((playerVal == "Rock!" && computerVal == "Scissors!") ||
            (playerVal == "Scissors!" && computerVal == "Paper!") ||
            (playerVal == "Paper!" && computerVal == "Rock!")
        ) {
            return 1; // Player wins
        } else {
            return -1; // Computer wins
        }
    }
 
    decision = (playerChoice)=> {
        const choices = ["Rock!", "Paper!", "Scissors!"];
        const compChoice =  choices[Math.floor(Math.random() * choices.length)];
        const val = this.logic(playerChoice, compChoice)
        let resultMessage = '';
        if(val == 1) {
            resultMessage = 'You Win!';
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice, 
                playerScore : this.state.playerScore +1
            })
        } else if(val == -1) {
            resultMessage = 'Computer Wins!';
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice,
                compScore : this.state.compScore +1
            })
        } else {
            resultMessage = "It's a Tie!";
            this.setState({
                computerVal : compChoice,
                playerVal : playerChoice
            })
        }
        this.setState({ resultMessage });
    }
    render(){
        const {playerVal, computerVal, playerScore, compScore, resultMessage} = this.state;
        return(
            <div className="container">
                <h1>Welcome to Rock, Paper, Scissors Game</h1>
                <div class="scores">
                <h2 className="play-score">Your Score:{playerScore}</h2>
                <h2 className="comp-score">Computer Score: {compScore}</h2>
                </div>
                <div class="weapons" >
                    <button onClick={()=>this.decision("Rock!")}>
                        <i className={`fas fa-hand-rock`} /></button>
                    <button onClick={()=>this.decision("Paper!")}>
                        <i className={`fas fa-hand-paper`} /></button>
                    <button onClick={()=>this.decision("Scissors!")}>
                        <i className={`fas fa-hand-scissors`} /></button>
                </div>
                <div className="details">
                    <p className="play-choice">Your choice: {playerVal}</p>
                    <p className="comp-choice">Computer's choice: {computerVal}</p>
                    <p className="result-message">{resultMessage}</p>
                </div>
            </div>
        )
    }
}
export default Game;