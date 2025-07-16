import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return <p>{text}</p>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
