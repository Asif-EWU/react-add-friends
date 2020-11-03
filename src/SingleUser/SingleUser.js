import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './SingleUser.css';

const SingleUser = (props) => {
    const {image, first_name, last_name, job, company, salary, city, country} = props.user;
    const addFriend = props.addFriendButton;

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
                <button onClick={()=>addFriend(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add friend</button>
            </div>
        </div>
    );
};

export default SingleUser;