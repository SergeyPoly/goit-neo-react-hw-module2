import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import { buttonTypes } from '../../constants';

const Feedback = ({ data, totalFeedback }) => {
  const positive = Math.round((data.good / totalFeedback) * 100);

  const feedbackList = buttonTypes.map(type => (
    <p key={type} className={css.text}>{`${type}: ${data[type]}`}</p>
  ));

  return (
    <div>
      {feedbackList}
      <p className={css.text}>{`Total: ${totalFeedback}`}</p>
      <p className={css.text}>{`Positive: ${positive}%`}</p>
    </div>
  );
};

Feedback.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Feedback;
