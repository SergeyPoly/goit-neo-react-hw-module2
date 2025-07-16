import PropTypes from 'prop-types';
import css from './Options.module.css';
import { buttonTypes } from '../../constants';

const Options = ({ handleUpdate, handleReset, totalFeedback }) => {
  const buttonList = buttonTypes.map(type => (
    <button
      key={type}
      className={css.button}
      onClick={() => handleUpdate(type)}
    >
      {type}
    </button>
  ));

  return (
    <div className={css.group}>
      {buttonList}
      {!!totalFeedback && (
        <button className={css.button} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
