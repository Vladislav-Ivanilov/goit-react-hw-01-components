import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import {
  Container,
  ProfileBlock,
  Image,
  UserInfo,
  ProfileList,
} from './Profile.styled';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <Container>
      <ProfileBlock>
        <Image src={avatar} alt="User avatar" />
        <UserInfo>{username}</UserInfo>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </ProfileBlock>

      <ProfileList>
        {Object.entries(stats).map(element => {
          const [title, quantity] = element;
          return <ProfileItem key={title} title={title} quantity={quantity} />;
        })}
      </ProfileList>
    </Container>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
