import { Component } from 'react';
import { FeedBackButtons } from './FeedBackButtons/FeedBackButtons';
import { FeedBackStatistic } from './FeedBackStatistic/FeedBackStatistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedBack = feedBack => {
    this.setState(prevState => ({
      [feedBack]: prevState[feedBack] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  checkFeedBack = () => {
    const { good, bad, neutral } = this.state;
    if (good || bad || neutral) {
      return true;
    }

    return false;
  };

  render() {
    const { good, bad, neutral } = this.state;
    const isFeedBack = this.checkFeedBack();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackButtons addFeedBack={this.addFeedBack}></FeedBackButtons>
        </Section>
        {isFeedBack ? (
          <Section title="Statistics">
            <FeedBackStatistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></FeedBackStatistic>
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
}
