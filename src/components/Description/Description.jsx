import PropTypes from 'prop-types';
import css from './Description.module.css';

const Description = ({ title, text }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
    </>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Description;
