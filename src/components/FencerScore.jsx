
function FencerScore ({fencer, fencerID, handleScoreChange}) {
    return (
        <>
            <div className="fencer">
                <div className="fencer-name">Fencer's Name</div>
                <div className="score">{fencer.score}</div>
                <div className="score-btns">
                    <button onClick = {() => handleScoreChange(fencerID, 1)} className="add-one-btn">+1</button>
                    <button onClick = {() => handleScoreChange(fencerID, -1)} className="subtract-one-btn">-1</button>
                </div>
            </div>      
        </>


    )
}

export default FencerScore