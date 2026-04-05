import { useEffect, useRef, useState } from "react";
import "./style.css";

const OTP_DIGITS_COUNT = 5;

const InputOTP = () => {
    const [otp, setOtp] = useState(() => Array(OTP_DIGITS_COUNT).fill(""));
    const inputsRef = useRef([]);

    // Focus first input on mount
    useEffect(() => {
        inputsRef.current[0]?.focus();
    }, []);

    // Handle input change
    const handleChange = (e, index) => {
        const value = e.target.value;

        // Allow only digits
        if (!/^\d*$/.test(value)) return;

        const updatedOtp = [...otp];
        updatedOtp[index] = value.slice(-1); // only last digit
        setOtp(updatedOtp);

        // Move to next input
        if (value && index < OTP_DIGITS_COUNT - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    // Handle key events (Backspace navigation)
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    // Handle paste (VERY IMPORTANT 🔥)
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, OTP_DIGITS_COUNT);

        if (!/^\d+$/.test(pastedData)) return;

        const updatedOtp = pastedData.split("");
        setOtp([...updatedOtp, ...Array(OTP_DIGITS_COUNT - updatedOtp.length).fill("")]);

        // Focus last filled input
        const lastIndex = updatedOtp.length - 1;
        inputsRef.current[lastIndex]?.focus();
    };

    return (
        <div className="otp-container">
            <h1>Validate OTP</h1>

            {otp.map((digit, index) => (
                <input
                    key={index}
                    className="otp-input"
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    ref={(el) => (inputsRef.current[index] = el)}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                />
            ))}
        </div>
    );
};

export default InputOTP;