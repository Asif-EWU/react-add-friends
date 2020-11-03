import React from 'react';
import FriendList from '../FriendList/FriendList';
import './FriendInfo.css';

const FriendInfo = (props) => {
    const friendList = props.friendList;
    const totalSalary = friendList.reduce((total, friend) => total + friend.salary, 0);
    
    return (
        <div>
            <div className="friend-list">
                <h2>Total Salary: ${totalSalary}</h2>
                <h2>Friend List: {friendList.length}</h2>
                <ul>
                    {
                        friendList.map(friend => <FriendList
                            key={friend.id.toString()}
                            friend={friend}
                            deleteFriendButton={props.deleteFriendButton}
                            ></FriendList>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default FriendInfo;