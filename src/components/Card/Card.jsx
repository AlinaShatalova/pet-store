import {useState, useMemo} from "react";
import cat from "../../images/cat.png";
import styles from "./Card.module.scss";

const Card = ({data}) => {
  const [isSelected, setIsSelected] = useState(false);
  const isDefault = !isSelected && !data.isDisabled;

  const bottomText = useMemo(() => {
    if (data.isDisabled) {
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
    data.isDisabled,
  ]);

  const cardClickHandler = () => {
    // useCallback
    setIsSelected(!isSelected);
  };

  return (
    <div className={styles["container"]}>
      <div
        className={styles["card"]}
        onClick={cardClickHandler}
      >
        <div className={styles["card__inner"]}>
          <div className={styles["card__texts"]}>
            <p className={styles["card__title"]}>{data.title}</p>
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
      <p className={styles["card__bottom_default"]}>
        {bottomText}{" "}
        {isDefault ? <span onClick={cardClickHandler}>{data.action}</span> : ""}
      </p>
    </div>
  );
};

export default Card;
