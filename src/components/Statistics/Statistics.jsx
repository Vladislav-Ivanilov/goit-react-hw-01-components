import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';

import { Section, Title, List } from './Statistics.styled';

export default function Statistics({ statistics }) {
  return (
    <Section>
      <Title>Upload stats</Title>

      <List>
        {statistics.map(({ id, label, percentage }) => {
          return <StatisticsList key={id} title={label} value={percentage} />;
        })}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
