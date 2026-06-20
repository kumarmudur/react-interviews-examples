import { useState } from "react";
import { Menu } from 'lucide-react';
import './style.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed' }`} data-testid="sidebar">
            <button className="toggle-btn" onClick={toggle} data-testid="btn-toggle" aria-label="Toggle sidebar">
                <Menu size={24} onClick={toggle} data-testid="icon-menu"/>
            </button>
            {
                isOpen && (
                    <nav className="nav-menu" data-testid="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item" data-testid="nav-item-home">Home</li>
                            <li className="nav-item" data-testid="nav-item-about">About</li>
                            <li className="nav-item" data-testid="nav-item-services">Services</li>
                            <li className="nav-item" data-testid="nav-item-contact">Contact</li>
                        </ul>
                    </nav>
                )
            }
        </div>
    )
}

export default Sidebar;