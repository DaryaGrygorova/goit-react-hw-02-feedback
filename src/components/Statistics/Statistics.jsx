import PropTypes from 'prop-types';
import { Box } from '../Box';
import StatItem from './StatItem';

const Statistics = ({ value }) => {
  return (
    <Box width="600px" margin="0 auto">
      {Object.keys(value).map((name, index) => (
        <StatItem
          key={index}
          name={name}
          value={value[name]}
          totalCount={value.total}
        />
      ))}
    </Box>
  );
};

Statistics.propTypes = {
  value: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;

export default Statistics;
