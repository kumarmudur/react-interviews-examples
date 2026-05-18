import { Component } from "react";

import './style.css';

const user = {
    name: 'Jane Doe',
    bio: 'Frontend developer who loves React and coffee ☕️',
    image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

class UserProfile extends Component {
    state = {
        showBio: false,
    }

    toggleBio = () => {
        this.setState(prevState => ({
            showBio: !prevState.showBio,
        }));
    };

    render() {
        const { showBio } = this.state;
        return (
            <div className="user-profile">
                <img src={user.image} className="profile-img" alt="user" />
                <h2>{user.name}</h2>
                { showBio && <p>{user.bio}</p> }
                <button onClick={this.toggleBio}>
                    { showBio ? 'Hide Bio' : 'Show Bio' }
                </button>
            </div>
        )
    }
}

export default UserProfile;