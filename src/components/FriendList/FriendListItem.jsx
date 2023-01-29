import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.friends__item}>
    <span className={`${css.friends__status} ${css[isOnline]}`}>
      {isOnline}
    </span>
    <img className={css.avatar} src={avatar} alt={name} />
    <p className={css.friends__name}>{name}</p>
  </li>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};