import Section from './components/Section/Section';
import { SECTION_TITLE } from './constants';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles["app"]}>
      <Section title={SECTION_TITLE} />
    </div>
  );
}

export default App;
