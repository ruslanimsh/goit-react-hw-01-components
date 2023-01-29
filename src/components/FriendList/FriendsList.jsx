import css from './Friends.module.css';
import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem'



const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(friend => (
          <FriendListItem 
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          ></FriendListItem>
        ))}
      
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default FriendList;
