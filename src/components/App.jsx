// src/App.jsx
import userData from '../data/userData.json';
import friends from "../data/friends.json";
import transactions from '../data/transactions.json'
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';


const App = () => {
  return (
    <div>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App; 