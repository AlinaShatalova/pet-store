import { useCallback } from "react";
import classNames from "classnames";
import styles from './CardDescription.module.scss'

const CardDescription = ({ text, cardState, action, onDescriptionClick }) => {
  const isDefault = cardState === 'default';
  const isDisabled = cardState === 'disabled';

  const descriptionHandler = useCallback(() => {
    onDescriptionClick();
  }, [onDescriptionClick]);

  return (      <p
        className={classNames(styles["description"], {
          [styles["description-disabled"]]: isDisabled,
        })}
      >
        {text}{" "}
        {isDefault ? <span onClick={descriptionHandler}>{action}</span> : ""}
      </p>)
};

export default CardDescription;