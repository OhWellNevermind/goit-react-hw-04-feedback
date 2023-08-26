import propTypes from 'prop-types';
import { List, ListItem } from '@mui/material';

export const FeedBackStatistic = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      <ListItem>Total: {total}</ListItem>
      <ListItem>Positive feedback: {positivePercentage}%</ListItem>
    </List>
  );
};

FeedBackStatistic.propTypes = {
  good: propTypes.number,
  bad: propTypes.number,
  neutral: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
