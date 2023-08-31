import { useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { cardState as state } from '../../constants';
import styles from './CardDescription.module.scss';

const CardDescription = ({ text, cardState, action, onDescriptionClick }) => {
  const isDefault = cardState === state.default;
  const isDisabled = cardState === state.disabled;

  const descriptionHandler = useCallback(() => {
    onDescriptionClick();
  }, [onDescriptionClick]);

  return (
    <p
      className={classNames(styles['description'], {
        [styles['description-disabled']]: isDisabled,
      })}
    >
      {text}{' '}
      {isDefault ? <span onClick={descriptionHandler}>{action}</span> : ''}
    </p>
  );
};

CardDescription.propTypes = {
  text: PropTypes.string,
  cardState: PropTypes.string,
  action: PropTypes.string,
  onDescriptionClick: PropTypes.func,
};

export default CardDescription;
