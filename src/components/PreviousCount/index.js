import { useState } from "react";
import usePrevious from './usePrevious';

const PreviousCount = () => {
    const [currentCount, setCurrentCount] = useState(0);

    const prevCount = usePrevious(currentCount);

    const handleIncrement = () => setCurrentCount(prevCount => prevCount + 1);

    const handleDecrement = () => setCurrentCount(prevCount => prevCount - 1);

    const handleReset = () => setCurrentCount(0);

    return (
        <div className="App">
            <h2>Current Count: { currentCount }</h2>
            <h2>Previous Count: { prevCount}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
};

export default PreviousCount;