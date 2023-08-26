import propTypes from 'prop-types';

export const FeedBackButtons = ({ addFeedBack }) => {
  return (
    <div>
      <ul>
        <li>
          <button
            onClick={evt => {
              addFeedBack(evt.target.value);
            }}
            value="good"
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={evt => {
              addFeedBack(evt.target.value);
            }}
            value="neutral"
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={evt => {
              addFeedBack(evt.target.value);
            }}
            value="bad"
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedBackButtons.propTypes = {
  addFeedBack: propTypes.func,
};
