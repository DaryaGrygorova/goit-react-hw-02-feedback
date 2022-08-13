import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Component } from 'react';
import Section from './Section';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonHandler = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const countTotal = Object.keys(this.state).reduce((acc, el) => {
      acc += +this.state[el];
      return acc;
    }, 0);
    return countTotal;
  };

  countPositiveFeedbackPercentage = () => {
    const countTotal = this.countTotalFeedback();
    const countPositive = (this.state.good / countTotal) * 100;
    if (countPositive) {
      return countPositive;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <Box>
        <Section title="Please leave feedback">
          <FeedbackOptions
            items={Object.keys(this.state)}
            onButtonHandler={this.onButtonHandler}
          />
        </Section>

        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              value={{
                ...this.state,
                total: this.countTotalFeedback(),
                positivePercentage: this.countPositiveFeedbackPercentage(),
              }}
            />
          )}
        </Section>

        <GlobalStyle />
      </Box>
    );
  }
}
