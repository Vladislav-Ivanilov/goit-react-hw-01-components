import PropTypes from 'prop-types';
import { SocialItem, Counter } from './Profile.styled';

export default function ProfileItem({ title, quantity }) {
  return (
    <SocialItem>
      <Counter>{title}</Counter>
      <Counter>{quantity}</Counter>
    </SocialItem>
  );
}

ProfileItem.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
