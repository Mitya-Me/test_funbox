import { Card } from '../Card'
import styles from './cards.module.scss'

export const Cards = () => {
    const mockData = [
        {flavor: 'с фуа-гра', portions: 10, gift: 1, weight: '0,5', description: 'Печень утки разварная с артишоками', inStock: true},
        {flavor: 'с рыбой', portions: 40, gift: 2, weight: '2', description: 'Головы щучьи с чесноком да свежайшая сёмгушка', inStock: false},
        {flavor: 'с курой', portions: 100, gift: 5, weight: '5', description: 'Филе из цыплят с трюфелями в бульоне.', inStock: true}
    ]
    
    return (
            <div className={styles.cards}>
                    {mockData.map(card => <Card key={card.flavor} card={card}/>)}
            </div>
    )
}