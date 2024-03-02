import styles from './cards.module.css'
import Image from 'next/image'


export default function Cards({ images, text, title, color }) {

    return (
        <article className={`${styles.card} ${color && styles.color_card}` }>
            <div className={styles.img_box}>
                <Image className={styles.image} src={images} alt="image-card" />
            </div>
            <div className={styles.text_content}>
                <h2 className={`${styles.title} ${color && styles.title_color}`}>{title}</h2>
                <p>{text}</p>
            </div>
        </article>
    )
}