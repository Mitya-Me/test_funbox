import "../../styles/globalStyles.module.scss";
import { Cards } from "../Cards";
import styles from './app.module.scss';

const App = () => {
    
    return (
        <div className={styles.wrapper}>
            <main>
                <h1 className={styles.title}> Ты сегодня покормил кота? </h1>
                <Cards/>
            </main>
        </div>
    )
}

export default App;
