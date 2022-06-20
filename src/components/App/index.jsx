import { useEffect, useState } from "react";
import "../../styles/globalStyles.module.scss";
import { Answers } from "../Answers";
import { Cards } from "../Cards";
import styles from './app.module.scss';

const App = () => {
    const [answersBtnVisibility, setAnswersBtnVisibility] = useState(false);
    const [answersPageVisibility, setAnswersPageVisibility] = useState(false);

    useEffect(() => {
    	window.addEventListener('keydown', handleKey);

        return () => window.removeEventListener('keydown', handleKey)
    }, [answersBtnVisibility])

    function handleKey (event) {
        if (event.key === 'Enter' && event.altKey) {
            setAnswersBtnVisibility(!answersBtnVisibility);
            window.removeEventListener('keydown', handleKey)
        }
    }

    function readAnswers () {
        setAnswersPageVisibility(!answersPageVisibility)
    }

    return (
        <div className={styles.wrapper}>
            {answersBtnVisibility && <div className={styles.answers} onClick={readAnswers}></div>}
            {answersPageVisibility
                ? <Answers/>
                : <main>
                    <h1 className={styles.title}> Ты сегодня покормил кота? </h1>
                    <Cards/>
                  </main>
            }
            <span className={styles.hint}>  Press Alt + Enter to read the answers </span>
        </div>
    )
}

export default App;
