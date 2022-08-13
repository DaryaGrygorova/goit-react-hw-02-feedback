import PropTypes from 'prop-types';
import { Box } from '../Box';
import Button from './FeedbackButton';

const FeedbackOptions = ({ items, onButtonHandler }) => {
  return (
    <Box display="flex" gridGap="15px">
      {items.map((item, index) => (
        <Button key={index} name={item} onClickHandler={onButtonHandler} />
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonHandler: PropTypes.func.isRequired,
};

export default FeedbackOptions;
