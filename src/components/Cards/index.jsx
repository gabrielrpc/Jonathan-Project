import { Card } from 'react-bootstrap'
import styles from './cards.module.css'
import Image from 'next/image'

export default function Cards({ images, text, title }) {

    return (
        <Card className={styles.card}>
            <Card.Img as={Image} variant="top" src={images} className={styles.image} />
            <Card.Body>
                <Card.Title className={styles.title}>{title}</Card.Title>
                <Card.Text className={styles.text}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}