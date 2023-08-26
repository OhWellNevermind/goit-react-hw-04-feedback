import propTypes from 'prop-types';

export const FeedBackStatistic = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

FeedBackStatistic.propTypes = {
  good: propTypes.number,
  bad: propTypes.number,
  neutral: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
