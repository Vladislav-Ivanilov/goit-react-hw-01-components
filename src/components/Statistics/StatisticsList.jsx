import PropTypes from 'prop-types';

import { Item, Value } from './Statistics.styled';

export default function StatisticsItem({ title, value }) {
  return (
    <Item title={title.slice(1)}>
      <Value>{title}</Value>
      <Value>{value}%</Value>
    </Item>
  );
}

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
