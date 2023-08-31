import classNames from 'classnames';
import styles from './CardTitle.module.scss';

const CardTitle = ({ isSelected, isHover }) => {
  const isSelectedHover = isSelected && isHover;

  const text = isSelectedHover
    ? 'Котэ не одобряет?'
    : 'Сказочное заморское яство';

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

export default CardTitle;
