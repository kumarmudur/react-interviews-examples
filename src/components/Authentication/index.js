import Dashboard from './Dashboard';
import Navbar from './Navbar';
import { UserProvider } from "./userContext";

const Authentication = () => {
    return (
        <UserProvider>
            <div className="app">
                <Navbar />
                <Dashboard />
            </div>
        </UserProvider>
    )
};

export default Authentication;