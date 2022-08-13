import PropTypes from 'prop-types';
import { Box } from '../Box';
import Button from './FeedbackButton';

const FeedbackOptions = ({ options, onButtonHandler }) => {
  return (
    <Box display="flex" gridGap="15px" justifyContent="center">
      {options.map((option, index) => (
        <Button key={index} option={option} onClickHandler={onButtonHandler} />
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonHandler: PropTypes.func.isRequired,
};

export default FeedbackOptions;
