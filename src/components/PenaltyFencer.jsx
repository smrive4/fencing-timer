function PenaltyFencer({fencer, fencerID, oppfencerID, handleScoreChange, handlePenalty}) {
    return (
        <div className="penalty-fencer">
            <div className="penalty-cards">
                {fencer.penalties}
            </div>
            <div className="penalty-btns">
                <button onClick={() => handlePenalty(fencerID, "yellow-card")} className="penalty-btn yellow-card">Yellow</button>
                <button onClick={() => {handleScoreChange(oppfencerID, +1); handlePenalty(fencerID, "red-card");}} className="penalty-btn red-card">Red</button>
                <button onClick={() => handlePenalty(fencerID, "black-card")} className="penalty-btn black-card">Black</button>
            </div>
        </div>
    )
}

export default PenaltyFencer;