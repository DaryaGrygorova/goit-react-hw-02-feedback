import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Component } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackStatistics from './FeedbackStatistics';

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
    return { total: countTotal };
  };

  countPositiveFeedbackPercentage = () => {
    const countTotal = this.countTotalFeedback().total;
    const countPositive = (this.state.good / countTotal) * 100;
    if (countPositive) {
      return { 'positive feedback': countPositive };
    } else {
      return { 'positive feedback': 0 };
    }
  };

  render() {
    return (
      <Box>
        <FeedbackForm
          items={Object.keys(this.state)}
          onButtonHandler={this.onButtonHandler}
        />
        <FeedbackStatistics
          value={{
            ...this.state,
            ...this.countTotalFeedback(),
            ...this.countPositiveFeedbackPercentage(),
          }}
          // countTotal={this.countTotalFeedback()}
          // countPositive={this.countPositiveFeedbackPercentage()}
        />

        <GlobalStyle />
      </Box>
    );
  }
}
