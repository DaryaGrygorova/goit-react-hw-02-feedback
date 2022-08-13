import PropTypes from 'prop-types';
import StatItem from './StatItem';

const Statistics = ({ value }) => {
  return (
    <>
      {Object.keys(value).map((name, index) => (
        <StatItem
          key={index}
          name={name}
          value={value[name]}
          totalCount={value.total}
        />
      ))}
    </>
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
