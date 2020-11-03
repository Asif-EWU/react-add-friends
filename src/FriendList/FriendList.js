import React from 'react';
import './FriendList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const FriendList = (props) => {
    const {image, first_name, last_name} = props.friend;
    const name = first_name + ' ' + last_name;
    
    const deleteFriendButton = props.deleteFriendButton;

    return (
        <li className="friend-list-item">
            <img src={image} alt=""/>
            <p>{name}</p>
            <button onClick={()=>deleteFriendButton(props.friend)}><FontAwesomeIcon icon={faTrashAlt} size="2x" /></button>
        </li>
    );
};


export default FriendList;