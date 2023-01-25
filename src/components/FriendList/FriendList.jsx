import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './Friend.styled';

export default function FriendList({ userList }) {
  return (
    <List className="friend__list">
      {userList.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            image={avatar}
            name={name}
            status={isOnline}
          />
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  id: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
