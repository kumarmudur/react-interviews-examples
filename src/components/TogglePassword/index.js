import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import './style.css'

const TogglePassword = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePassword = () => {
        console.log("TOGGLE PASSWORD");
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="container">
            <h1 className="title">Toggle Password</h1>
            <div className="password-wrapper">
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Enter Password"
                    className="password-input"
                    data-testid="password-input"
                />
                <span
                    className="icon"
                    data-testid="toggle-icon"
                    onClick={togglePassword}
                >
                    { isPasswordVisible ? <Eye size={18}/> : <EyeOff size={18}/> }
                </span>
            </div>
            <span className="visibility-label" data-testid="visibility-label">
                {
                    isPasswordVisible ? 'Password Visible' : 'Password Hidden'
                }
            </span>
        </div>
    );
};

export default TogglePassword;