import {useState} from "react";
import './style.css';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = ()=> {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <h1>Dark Mode Toggle</h1>
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                    <span className="slider round"></span>
                </label>
                <span className="mode-text">
                    { isDarkMode ? 'Dark Mode' : 'Light Mode' }
                </span>
            </div>
        </div>
    )
};

export default DarkModeToggle;