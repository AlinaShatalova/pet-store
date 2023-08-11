import Section from './components/Section/Section';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles["app"]}>
      <Section title={"Ты сегодня покормил кота?"} />
    </div>
  );
}

export default App;
