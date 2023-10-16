import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li class="item" key={id}>
      {isOnline && <span class="status"></span>}
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;
