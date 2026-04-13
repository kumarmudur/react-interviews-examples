import { useState } from 'react';
import './style.css';

function CharacterCount() {
    const [text, setText] = useState("");
    const [maxLength, setMaxLength] = useState(50);

    function handleChange(e) {
        setText(e.target.value);
    }

    const handleChangeChar = event => {
        setMaxLength(event.target.value);
    }

    const charCount = text.length;
    const warningLimit = Math.floor(maxLength * 0.9);
    const overLimit = charCount > maxLength;
    const warning = charCount >= warningLimit;

    return (
        <div className="characterCount">
            <h1>Character Count</h1>
            <p>Track your input length with live character warnings.</p>
            <div className="container">
                <div className="inputs">
                    <label>
                        Max length:
                        <input type="number" min="0" max="1000"
                               value={maxLength}
                               onChange={handleChangeChar}
                               data-testid="maxlength" />
                    </label>
                </div>
                <textarea
                    className="text"
                    placeholder="Start Typing"
                    data-testid="textarea"
                    value={text}
                    onChange={handleChange}
                ></textarea>
                <div className="char-info" data-testid="char-info">
                    {charCount} / {maxLength}
                </div>
                <div className="warnings">
                    {
                        warning && !overLimit && (
                            <p className="warning-text" data-testid="warning-text">
                                You are close to the limit!
                            </p>
                        )
                    }
                    {/* Show  Overlimit message if limit is exceeded*/}
                    {
                        overLimit && (
                            <p className="error-message" data-testid="error-text">{
                                `Limit exceeded by ${charCount - maxLength} characters`
                            }
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default CharacterCount;
