import propTypes from 'prop-types';
import { Button, ButtonGroup } from '@mui/material';

export const FeedBackButtons = ({ addFeedBack }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        variant="outlined"
        onClick={evt => {
          addFeedBack(evt.target.value);
        }}
        value="good"
      >
        Good
      </Button>
      <Button
        variant="outlined"
        onClick={evt => {
          addFeedBack(evt.target.value);
        }}
        value="neutral"
      >
        Neutral
      </Button>
      <Button
        variant="outlined"
        onClick={evt => {
          addFeedBack(evt.target.value);
        }}
        value="bad"
      >
        Bad
      </Button>
    </ButtonGroup>
  );
};

FeedBackButtons.propTypes = {
  addFeedBack: propTypes.func,
};
