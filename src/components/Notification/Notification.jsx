import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: propTypes.string,
};
