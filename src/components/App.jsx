import Profile from './profile/Profile';
import userData from './profile/user.json';
import Statistics from './statistics/Statistics';
import statisticsData from './statistics/data.json';
import FriendsList from './friendList/FriendsList';
import friends from './friendList/friends.json';
import FriendListItem from './friendList/friendListItem/friendListItem';
import TransactionsHistory from './transactionHistory/transactionHistory';
import items from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics
        statisticsData={statisticsData}
        statisticsTitle="Upload stats"
      />
      <FriendsList friends={friends}>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
          key={friends.id}
        />
      </FriendsList>
      <TransactionsHistory items={items} />
    </>
  );
};
