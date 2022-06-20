import { qustionsAndAnswersMockData } from "../../mockData/mockData";
import styles from './answers.module.scss'

export const Answers = () => {

    return (
        <ul className={styles.answers}>
            <span>исходник: https://github.com/Mitya-Me/test_funbox</span>
            {qustionsAndAnswersMockData.map((qa, index) => (
                <li className={styles.answers__item}>
                    <h2 className={styles["answers__item-question"]}>Q{index + 1}. {qa.question} </h2>
                    <p className={styles["answers__item-answer"]}> {qa.answer} </p>
                </li>
            ))}
        </ul>
    );
};
