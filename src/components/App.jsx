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

  render() {
    return (
      <Box>
        <FeedbackForm
          items={Object.keys(this.state)}
          onButtonHandler={this.onButtonHandler}
        />
        <FeedbackStatistics value={this.state} />
        <GlobalStyle />
      </Box>
    );
  }
}
