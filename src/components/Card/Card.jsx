import { useState, useMemo, useCallback } from 'react';
import cat from '../../images/cat.png';
import classNames from 'classnames';
import CardDescription from '../CardDescription/CardDescription';
import CardTitle from '../CardTitle/CardTitle';
import PropTypes from 'prop-types';
import { cardState as state } from '../../constants';
import styles from './Card.module.scss';

const Card = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const { isDisabled } = data;

  const cardState = useMemo(() => {
    if (isDisabled) {
      return state.disabled;
    }

    if (isSelected) {
      return state.selected;
    }

    return state.default;
  }, [isSelected, isDisabled]);

  const cardClickHandler = useCallback(() => {
    setIsSelected(!isSelected);
  }, [isSelected]);

  const mouseEnterHandler = useCallback(() => {
    if (isSelected) {
      setIsHover(true);
    }
  }, [isSelected]);

  const mouseLeaveHandler = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <div className={styles['container']}>
      <div
        className={classNames(styles['card'], {
          [styles['card-selected']]: isSelected,
          [styles['card-disabled']]: isDisabled,
        })}
        onClick={isDisabled ? () => {} : cardClickHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div className={styles['card__inner']}>
          <div className={styles['card__texts']}>
            <CardTitle isSelected={isSelected} isHover={isHover} />
            <p className={styles['card__name']}>{data.name}</p>
            <p className={styles['card__taste']}>{data.taste}</p>
            <p className={styles['card__amount']}>{data.amount}</p>
            <p className={styles['card__gift']}>{data.gift}</p>
            {data.isCustomerHappy ? (
              <p className={styles['card__customer-happy']}>
                {data.isCustomerHappy}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className={styles['card__weight']}>
            {data.weight.value} <span>{data.weight.unit}</span>
          </div>
          <div className={styles['card__image']}>
            <img src={cat} alt="cat" />
          </div>
        </div>
      </div>
      <CardDescription
        text={data.description[cardState]}
        cardState={cardState}
        action={data.action}
        onDescriptionClick={cardClickHandler}
      />
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    taste: PropTypes.string,
    amount: PropTypes.string,
    gift: PropTypes.string,
    weight: PropTypes.shape({
      value: PropTypes.string,
      unit: PropTypes.string,
    }),
    description: PropTypes.shape({
      default: PropTypes.string,
      selected: PropTypes.string,
      disabled: PropTypes.string,
    }),
    action: PropTypes.string,
    isDisabled: PropTypes.bool,
  }),
};

export default Card;
