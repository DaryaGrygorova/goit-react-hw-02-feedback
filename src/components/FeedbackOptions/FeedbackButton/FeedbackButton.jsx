import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackButton.styled';

const Button = ({ option, onClickHandler }) => {
  return (
    <StyledButton
      type="button"
      name={option}
      onClick={event => {
        onClickHandler(event.currentTarget.name);
      }}
    >
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </StyledButton>
  );
};

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
