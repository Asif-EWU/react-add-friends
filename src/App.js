import React, { useState } from 'react';
import './App.css';
import Container from './Container/Container';
import FriendInfo from './FriendInfo/FriendInfo';
import fakedata from './fakedata/userList.js';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  const userList = fakedata.slice(0, 20);
  const [friendList, setFriendList] = useState([]);
  
  const addFriend = (newFriend) => {
    if(!friendList.find(friend => newFriend === friend)) {
      const newFriendList = [...friendList, newFriend];
      setFriendList(newFriendList);
    }
  };

  const deleteFriend = (friendToDelete) => {
    const newFriendList = friendList.filter(friend => friend !== friendToDelete);
    setFriendList(newFriendList);
  }

  return (
    <div>
      <Header></Header>
      <div className="body-part">
        <Container data={userList} friendList={friendList} addFriendButton={addFriend}></Container>
        <FriendInfo friendList={friendList} deleteFriendButton={deleteFriend}></FriendInfo>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
