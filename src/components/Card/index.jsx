import { useState } from 'react'
import styles from './card.module.scss'
import { ReactComponent as Border } from '../../assets/img/card/borders/border.svg'
import { mouseDeclonation } from '../../helpers/helpers'

export const Card = ({ card }) => {
    const {flavor, portions, gift, weight, description, inStock} = card

    const [select, setSelect] = useState(false)
    const handleSelect = () => setSelect(!select)

    const cardConditionClass = inStock ? styles['card--def'] : styles['card--dis']
    const pressedConditionClass = select ? styles['card--select'] : ''
    const mice = mouseDeclonation(gift)

    return (
        <div className={styles['card-shell']}>
            <div
                onClick={handleSelect}
                className={`${styles.card} ${cardConditionClass} ${pressedConditionClass}`}
            >
                <Border className={styles['card-border']} />
                <div className={styles['card-wrap']}>
                    <div className={styles.card__text}>
                        <span className={styles['card__text-tagline']}>
                            Сказочное заморское яство
                        </span>
                        <h2 className={styles['card__text-title']}> Нямушка </h2>
                        <span className={styles['card__text-flavor']}> {flavor} </span>
                        <ul className={styles['card__text-subtitle']}>
                            <li> <span className={styles['card__text-subtitle--bold']}> {portions} </span> порций </li>
                            <li> <span className={styles['card__text-subtitle--bold']}> {gift} </span> {mice} в подарок </li>
                            {weight === '5' ? <li> заказчик доволен </li> : null}
                        </ul>
                    </div>
                    <div className={styles.card__weight}>
                        <div className={styles['card__weight-wrap']}>
                            <span className={styles['card__weight-amount']}> {weight} </span>
                            <span className={styles['card__weight-kg']}> кг </span>
                        </div>
                    </div>
                    <div className={styles.card__img}></div>
                </div>
            </div>
            <div className={styles.card__description}>
                {!inStock 
                    ? <span className={`${styles['card__description-text']} ${styles['card__description-text--disabled']}`}>
                        Печалька, {flavor} закончился.
                      </span>
                    : select 
                    ? <span className={`${styles['card__description-text']} ${styles['card__description-text--select']}`}>
                        {description}.
                      </span>
                    : <span className={`${styles['card__description-text']} ${styles['card__description-text--def']}`}>
                        {`Чего сидишь? Порадуй котэ, `}
                        <span onClick={handleSelect} className={styles['card__description-text--buy']}>
                            купи
                        </span>
                        <span className={styles['card__description-dot']}>.</span>
                      </span>
                }
            </div>
        </div>
    )
}
