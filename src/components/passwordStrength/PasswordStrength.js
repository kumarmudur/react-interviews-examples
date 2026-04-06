import { useState } from "react";
import { checkPasswordStrength } from'./helper';

const PasswordStrength = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const handleChange = event => {
        setPassword(event.target.value);
    }

    const checkPassword = () => {
        setStrength(checkPasswordStrength(password));
    }

    return (
      <div>
          <h2>Password Strength Checker </h2>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <button onClick={checkPassword}>Check Strength</button>
          {strength && <p>Strength: <strong>{strength}</strong></p>}
      </div>
    );

};

export  default PasswordStrength;