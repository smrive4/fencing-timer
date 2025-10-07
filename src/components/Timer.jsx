import { useState, useEffect, useRef } from "react";
import "./Timer.css";

function Timer ({initialTime = 180000, totalPeriods = 3, reset, onMatchEnd,}) {
    
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [currPeriod, setCurrPeriod] = useState(1);
    const intervalRef = useRef(null);
    const targetTimeRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            //
            intervalRef.current = setInterval(() => {
                const remaining = targetTimeRef.current - Date.now();
                
                if (remaining <= 0){
                    setTime(0);
                    setIsRunning(false);                    
                } else {
                    setTime(remaining)
                }
            }, 100);
        }

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isRunning])

    useEffect(() => {
        if(time === 0 && !isRunning){
            if(currPeriod < totalPeriods){
                setTimeout(() => {
                    setCurrPeriod(prev  => prev + 1)
                    setTime(initialTime);
                }, 1000)
            } else {
                if(onMatchEnd) {
                    onMatchEnd();
                }
            }
        }
    }, [time, isRunning, currPeriod, totalPeriods, initialTime, onMatchEnd]);

    function selectPeriod(period) {
        if(period !== currPeriod){
            setCurrPeriod(period);
            setIsRunning(false);
            setTime(initialTime);
        }

    }

    function start() {
        setIsRunning(true);
        targetTimeRef.current = Date.now() + time;
    }
    
    function stop() {
        setIsRunning(false);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(initialTime);
        setCurrPeriod(1);
        reset();
    }

    function formatTime () {
        let minutes = Math.floor(time / (1000 * 60));
        let seconds = Math.floor((time / 1000) % 60);
        // let milliseconds = Math.floor((time % 1000) / 10);

        return `${minutes}:${String(seconds).padStart(2, "0")}`;
    }

    return (
        <div className="timer-section">
            <div className="period-section">
                <div className="period-label">PERIOD</div>
                <div className="period-display">
                    {[1,2,3].map((period) =>(
                        <div key = {period} onClick={() => selectPeriod(period)} className={`period-indicator ${period === currPeriod ? 'active' : ''}`}>{period}</div>
                    ))}
                </div>
            </div>
            <div className="timer-display">
                {formatTime()}
            </div>
            <div className="timer-controls">
                <button onClick = {start}className="start-btn">START</button>
                <button onClick = {stop} className="stop-btn">STOP</button>
                <button onClick = {handleReset} className="reset-btn">RESET</button>
            </div>
        </div>
    )
}

export default Timer