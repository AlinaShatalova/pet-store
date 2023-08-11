import cat from "../../images/cat.png";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card__inner"]}>
          <div className={styles["card__texts"]}>
            <p className={styles["card__title"]}>Сказочное заморское яство</p>
            <p className={styles["card__name"]}>Нямушка</p>
            <p className={styles["card__taste"]}>с фуа-гра</p>
            <p className={styles["card__amount"]}>10 порций мышь в подарок</p>
          </div>
          <div className={styles["card__weight"]}>
            0,5 <span>кг</span>
          </div>
          <div className={styles["card__image"]}>
            <img
              src={cat}
              alt='cat'
            />
          </div>
        </div>
        <p className={styles["card__bottom-text"]}>
          Чего сидишь? Порадуй котэ, <span>купи.</span>
        </p>
      </div>
    </>
  );
};

export default Card;
