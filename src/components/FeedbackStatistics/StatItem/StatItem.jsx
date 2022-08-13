import PropTypes from 'prop-types';
import { Item, Title, Value } from './StatItem.styled';

const StatItem = ({ name, value }) => {
  console.log(name, value);
  return (
    <Item>
      <Title>{name.charAt(0).toUpperCase() + name.slice(1)}:</Title>
      <Value name={name} value={value}>
        {value ? value : '-'}
      </Value>
    </Item>
  );
};

StatItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}.isRequired;

export default StatItem;
