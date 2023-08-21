import {useState, useMemo, useCallback} from "react";
import cat from "../../images/cat.png";
import classNames from "classnames";
import styles from "./Card.module.scss";

const SELECTEDHOVER_TITLE = "Котэ не одобряет?";

const Card = ({data}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [titleText, setTitleText] = useState(data.title);

  const {isDisabled} = data;
  const isDefault = !isSelected && !isDisabled;

  const bottomText = useMemo(() => {
    if (isDisabled) {
      return data.bottomTextDisabled;
    }

    if (isSelected) {
      return data.bottomTextSelected;
    }

    return data.bottomTextDefault;
  }, [
    isSelected,
    data.bottomTextDefault,
    data.bottomTextSelected,
    data.bottomTextDisabled,
    isDisabled,
  ]);

  const cardClickHandler = useCallback(() => {
    setIsSelected(!isSelected);
  }, [isSelected]);

  const mouseEnterHandler = () => {
    if (isSelected) {
      setTitleText(SELECTEDHOVER_TITLE);
    }
  };

  const mouseLeaveHandler = () => {
    setTitleText(data.title);
  };

  return (
    <div className={styles["container"]}>
      <div
        className={classNames(styles["card"], {
          [styles["card-selected"]]: isSelected,
          [styles["card-disabled"]]: isDisabled,
        })}
        onClick={isDisabled ? () => {} : cardClickHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div className={styles["card__inner"]}>
          <div className={styles["card__texts"]}>
            <p
              className={classNames(styles["card__title"], {
                [styles["card__title-selectedhover"]]:
                  titleText === SELECTEDHOVER_TITLE && isSelected,
              })}
            >
              {isSelected ? titleText : data.title}
            </p>
            <p className={styles["card__name"]}>{data.name}</p>
            <p className={styles["card__taste"]}>{data.taste}</p>
            <p className={styles["card__amount"]}>{data.amount}</p>
            <p className={styles["card__gift"]}>{data.gift}</p>
            {data.isCustomerHappy ? (
              <p className={styles["card__customer-happy"]}>
                {data.isCustomerHappy}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={styles["card__weight"]}>
            {data.weight} <span>{data.unit}</span>
          </div>
          <div className={styles["card__image"]}>
            <img
              src={cat}
              alt='cat'
            />
          </div>
        </div>
      </div>
      <p
        className={classNames(styles["card__bottom"], {
          [styles["card__bottom-disabled"]]: isDisabled,
        })}
      >
        {bottomText}{" "}
        {isDefault ? <span onClick={cardClickHandler}>{data.action}</span> : ""}
      </p>
    </div>
  );
};

export default Card;
