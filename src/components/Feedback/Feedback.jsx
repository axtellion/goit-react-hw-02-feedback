import React, { Component } from 'react';
import { Box } from 'components/Box';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addRespond = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box>
        <Box as="section">
          <Section title={'Please Leave feedback'} />
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addRespond}
          />
        </Box>
        <Box as="section">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              title={'Statistics'}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Box>
      </Box>
    );
  }
}
