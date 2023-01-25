import user from '../data/user.json';
import data from '../data/data.json';
import transaction from '../data/transactions.json';
import friends from '../data/friends.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={data} />
      <Statistics statistics={data} />

      <FriendList userList={friends} />

      <TransactionHistory transaction={transaction} />
    </div>
  );
};
