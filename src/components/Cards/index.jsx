import { cardsMockData } from '../../mockData/mockData'
import { Card } from '../Card'
import styles from './cards.module.scss'

export const Cards = () => {
    
    
    return (
            <div className={styles.cards}>
                    {cardsMockData.map(card => <Card key={card.flavor} card={card}/>)}
            </div>
    )
}