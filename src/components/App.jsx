import { useState } from 'react';
import { FeedBackButtons } from './FeedBackButtons/FeedBackButtons';
import { FeedBackStatistic } from './FeedBackStatistic/FeedBackStatistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedBack = feedBack => {
    if (feedBack === 'good') {
      setGood(good + 1);
    } else if (feedBack === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBackButtons addFeedBack={addFeedBack}></FeedBackButtons>
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <FeedBackStatistic
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></FeedBackStatistic>
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
