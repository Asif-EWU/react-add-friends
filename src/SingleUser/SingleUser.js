import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './SingleUser.css';

const SingleUser = (props) => {
    const {image, first_name, last_name, job, company, salary, city, country} = props.user;
    const addFriend = props.addFriendButton;
    const friendList = props.friendList;

    let friendStatus;
    if(friendList.find(friend => friend === props.user)) {
        friendStatus = <button onClick={()=>addFriend(props.user)}><FontAwesomeIcon icon={faCheck} /> Friend Added</button>;
    }
    else {
        friendStatus = <button onClick={()=>addFriend(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>;
    }

    return (
        <div className="single-user">
            <div className="image">
                <img src={image} alt=""/>
            </div>
            <div className="user-info">
                <h2>{first_name + ' ' + last_name}</h2>
                <p>{job}</p>
                <p>{company}</p>
                <p>$ {salary}</p>
                <p>{city + ', ' + country}</p>
                {friendStatus}
            </div>
        </div>
    );
};

export default SingleUser;