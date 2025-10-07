import PenaltyFencer from "./PenaltyFencer"

function Penalties({fencerA, fencerB, handleScoreChange, handlePenalty}) {
    return(
        <div className="penalty-section">
            <h2>PENALTY CARDS</h2>
            <div className="penalties">
                <PenaltyFencer fencer={fencerA} fencerID={'A'} handleScoreChange={handleScoreChange} handlePenalty={handlePenalty} oppfencerID={'B'}/>
                <PenaltyFencer fencer={fencerB} fencerID={'B'} handleScoreChange={handleScoreChange} handlePenalty={handlePenalty} oppfencerID={'A'}/>
            </div>
        </div>
    )
}

export default Penalties