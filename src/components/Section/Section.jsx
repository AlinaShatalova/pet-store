import Card from "../Card/Card";
import styles from "./Section.module.scss";

const Section = ({title}) => {
  return (
    <section className={styles["section"]}>
      <h2 className={styles["section__header"]}>{title}</h2>
      <div className={styles["section__cards"]}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Section;
