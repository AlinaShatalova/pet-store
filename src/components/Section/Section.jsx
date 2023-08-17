import {data} from "./cards-data";
import Card from "../Card/Card";
import styles from "./Section.module.scss";

const Section = ({title}) => {
  return (
    <section className={styles["section"]}>
      <h2 className={styles["section__header"]}>{title}</h2>
      <div className={styles["section__cards"]}>
        {data.map(cardData => (
          <Card
            key={cardData.id}
            data={cardData}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
