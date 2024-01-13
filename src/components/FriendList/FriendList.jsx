// src/components/FriendList.jsx

import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css'; 

function  FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
                                       
