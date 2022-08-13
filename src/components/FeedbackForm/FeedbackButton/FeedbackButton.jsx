import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackButton.styled';

const Button = ({ name, onClickHandler }) => {
  return (
    <StyledButton
      type="button"
      name={name}
      onClick={event => {
        onClickHandler(event.currentTarget.name);
      }}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </StyledButton>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
