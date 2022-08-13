import PropTypes from 'prop-types';
import { Box } from '../Box';
import Button from './FeedbackButton';
import { Title } from './FeedbackForm.styled';

const FeedbackForm = ({ items, onButtonHandler }) => {
  return (
    <Box marginBottom="25px">
      <Title>Please leave feedback</Title>
      <Box display="flex" gridGap="15px">
        {items.map((item, index) => (
          <Button key={index} name={item} onClickHandler={onButtonHandler} />
        ))}
      </Box>
    </Box>
  );
};

FeedbackForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonHandler: PropTypes.func.isRequired,
};

export default FeedbackForm;
