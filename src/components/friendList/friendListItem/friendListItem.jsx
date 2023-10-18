import React from 'react';
import PropTypes from 'prop-types';
import css from '../friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={{ backgroundColor: statusColor(isOnline) }}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

const statusColor = isOnline => {
  const green = '#00FF00';
  const red = '#FF0000';

  return isOnline ? green : red;
};

export default FriendListItem;
