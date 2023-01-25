import PropTypes from 'prop-types';
import { Item, Indicator, Image, Title } from './Friend.styled';

export default function FriendItem({ image, name, status }) {
  return (
    <Item>
      <Indicator status={status}></Indicator>

      <Image src={image} alt="User avatar" width="48" />
      <Title>{name}</Title>
    </Item>
  );
}

FriendItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
