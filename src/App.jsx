import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import Timer from './components/Timer'
import {useState} from "react";
import './App.css'
import Penalties from './components/Penalties';

function App() {
  
  const[fencerA, setFencerA] = useState({
    name: "Fencer A",
    score: 0,
    penalties: []
  });

  const[fencerB, setFencerB] = useState({
    name: "Fencer B",
    score: 0,
    penalties: []
  });

  function handlePenalty(fencer, type) {
    if(fencer === 'A')
    {
      //
      setFencerA(prev => ({...prev, 
        penalties: [...prev.penalties, <div className={`card ${type}`}>!</div>]
      }))
    } else {
      //
      setFencerB(prev => ({...prev, 
        penalties: [...prev.penalties, <div className={`card ${type}`}>!</div>]
      }))
    }
  }

  function handleScoreChange (fencer, change) {
    if(fencer === 'A') {
      setFencerA(prev => ({...prev, score:Math.max(0, prev.score + change)}))
    } else {
      setFencerB(prev => ({...prev, score: Math.max(0, prev.score + change)}))
    }
  }

  function reset() {
    setFencerA(prev => ({...prev, score: 0, penalties: []}));
    setFencerB(prev => ({...prev, score: 0, penalties: []}));
  }

  return (
    <div className="container">
      <Header />
      <Timer reset={reset}/>
      <ScoreBoard fencerA = {fencerA} fencerB = {fencerB} handleScoreChange={handleScoreChange}/>
      <Penalties fencerA = {fencerA} fencerB = {fencerB} handleScoreChange={handleScoreChange} handlePenalty={handlePenalty}/>
    </div>
    
  )
}

export default App
