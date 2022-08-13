import PropTypes from 'prop-types';
import { Item, Title, Value } from './StatItem.styled';

const StatItem = ({ name, value, totalCount }) => {
  return (
    <Item>
      {name === 'positivePercentage' ? (
        <>
          <Title>Positive feedback:</Title>
          <Value value={value}>{value ? `${value.toFixed(0)}%` : '-'}</Value>
        </>
      ) : (
        <>
          <Title>{name.charAt(0).toUpperCase() + name.slice(1)}:</Title>
          <Value name={name} value={value} totalCount={totalCount}>
            {value ? value : '-'}
          </Value>
        </>
      )}
    </Item>
  );
};

StatItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
}.isRequired;

export default StatItem;
