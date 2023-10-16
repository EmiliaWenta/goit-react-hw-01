import React from 'react';
import FriendListItem from './friendListItem/friendListItem';

const FriendsList = ({ friends }) => {
  const friendListItem = friends.map(friends => (
    <FriendListItem
      avatar={friends.avatar}
      name={friends.name}
      isOnline={friends.isOnline}
      key={friends.id}
    />
  ));
  return <ul class="friend-list">{friendListItem}</ul>;
};

export default FriendsList;
