import { useState } from "react";

import './style.css';

const EvenOrOdd = () => {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = event => setNumber(event.target.value);

    const checkResult = () => {
        setResult(null);
        setLoading(true);
        setTimeout(() => {
            let parsed = parseInt(number, 10);
            if (isNaN(parsed)) {
                setResult('Please enter a valid number');
            } else {
                setResult(`The number ${parsed} is ${parsed % 2 === 0 ? 'even' : 'odd'}`);
            }
            setLoading(false);
        }, 1000);
    }

    return (
        <div className="even-odd-container" data-testid="even-odd-container">
            <h1 className="title" data-testid="title">Even or Odd Checker</h1>
            <input
                className="number-input"
                type="text"
                placeholder="Enter a number"
                value={number}
                onChange={handleChange}
                data-testid="number-input"
            />

            <buton
                className="check-button"
                onClick={checkResult}
                data-testid="check-button"
              >
                Check
            </buton>

            <div className="result-area" data-testid="result-area">
                {
                    loading ? (
                        <div className="loading" data-testid="loading">Checking...</div>
                    ) : result !== null ? (
                        <div className="result" data-testid="result">{result}</div>

                    ) : null
                }
            </div>
        </div>
    )
}

export default EvenOrOdd;