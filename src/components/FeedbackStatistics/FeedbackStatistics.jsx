import PropTypes from 'prop-types';
import { Box } from '../Box';
import StatItem from './StatItem';
import { Title } from './FeedbackStatistics.styled';

const FeedbackStatistics = ({ value }) => {
  return (
    <Box>
      <Title>Statistics</Title>
      {Object.keys(value).map((name, index) => (
        <StatItem key={index} name={name} value={value[name]} />
      ))}
    </Box>
  );
};

FeedbackStatistics.propTypes = {
  value: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotal: PropTypes.number.isRequired,
    countPositive: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;

export default FeedbackStatistics;
