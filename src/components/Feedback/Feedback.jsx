import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import FeedbackSection from './FeedbackSection';
import FeedbackStatistics from './FeedbackStatistics';

import Notification from './Notification ';

import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalValue() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePersentage() {
    const totalValue = this.totalValue();
    const goodValue = this.state.good;
    const result = (goodValue / totalValue) * 100;
    return Math.round(result);
  }

  onLeaveFeedback = voteChoise => {
    this.setState(prevState => {
      const valueChoise = prevState[voteChoise];

      return {
        [voteChoise]: valueChoise + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalValue = this.totalValue();

    const keyArr = Object.keys(this.state);
    const positivePersentage = this.positivePersentage();

    return (
      <div className={css.container}>
        <FeedbackSection title="Please leave feedback">
          <FeedbackOptions
            options={keyArr}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </FeedbackSection>

        {/* <FeedbackSection title="Statistics">
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalValue={totalValue}
            positivePersentage={positivePersentage}
          />
        </FeedbackSection> */}

        <FeedbackSection title="Statistics">
          {totalValue === 0 ? (
            <Notification title="There is no feedback" />
          ) : (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalValue={totalValue}
              positivePersentage={positivePersentage}
            />
          )}
        </FeedbackSection>
      </div>
    );
  }
}

export default Feedback;
