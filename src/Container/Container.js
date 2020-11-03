import React from 'react';
import SingleUser from '../SingleUser/SingleUser';
import './Container.css';

const Container = (props) => {
    const userList = props.data;

    return (
        <div className="container">
            {
                userList.map(user => <SingleUser 
                    key={user.id.toString()} 
                    user={user}
                    friendList = {props.friendList}
                    addFriendButton={props.addFriendButton}
                    ></SingleUser>
                )
            }
        </div>
    );
};

export default Container;