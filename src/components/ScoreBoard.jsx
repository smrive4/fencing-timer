import FencerScore from "./FencerScore";
import "./ScoreBoard.css";

function ScoreBoard({fencerA, fencerB, handleScoreChange}) {
    return (
        <div className="score-section">
            <FencerScore fencer={fencerA} fencerID = {'A'} handleScoreChange = {handleScoreChange}/>
            <FencerScore fencer={fencerB} fencerID = {'B'} handleScoreChange = {handleScoreChange}/>
        </div>
    )
}

export default ScoreBoard