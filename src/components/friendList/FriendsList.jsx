import React from 'react';
import FriendListItem from './friendListItem/friendListItem';
import PropTypes from 'prop-types';
import css from './friendList.module.css';

const FriendsList = ({ friends }) => {
  const friendListItem = friends.map(friends => (
    <FriendListItem
      avatar={friends.avatar}
      name={friends.name}
      isOnline={friends.isOnline}
      id={friends.id}
      key={friends.id}
    />
  ));
  return <ul className={css.friendList}>{friendListItem}</ul>;
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default FriendsList;
