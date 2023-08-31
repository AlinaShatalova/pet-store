import classNames from 'classnames';
import { CAT_NOT_LIKE, CARD_TITLE } from '../../constants';
import PropTypes from 'prop-types';
import styles from './CardTitle.module.scss';

const CardTitle = ({ isSelected, isHover }) => {
  const isSelectedHover = isSelected && isHover;

  const text = isSelectedHover
    ? CAT_NOT_LIKE
    : CARD_TITLE;

  return (
    <p
      className={classNames(styles['title'], {
        [styles['title-selectedhover']]: isSelectedHover,
      })}
    >
      {text}
    </p>
  );
};

CardTitle.propTypes = {
  isSelected: PropTypes.bool,
  isHover: PropTypes.bool,
};

export default CardTitle;
