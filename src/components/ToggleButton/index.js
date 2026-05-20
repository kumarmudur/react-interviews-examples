import { useToggle } from "./useToggle";
import './style.css';

const ToggleButton = () => {
    const [isOn, toggle] = useToggle(false);

    return (
        <button data-testid="toggle-button" onClick={toggle}>
            { isOn ? 'ON': 'OFF'}
        </button>
    )
};

export default ToggleButton;