import styles from './cards.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Cards({ images, text, title, color, index }) {

    return (
        <motion.article
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, delay: index > 3 ? index = 0 * 0.2 : index * 0.2}}
            className={`${styles.card} ${color && styles.color_card}`}
        >
            <div className={styles.img_box}>
                <Image className={styles.image} src={images} alt="image-card" />
            </div>
            <div className={styles.text_content}>
                <h2 className={`${styles.title} ${color && styles.title_color}`}>{title}</h2>
                <p>{text}</p>
            </div>
        </motion.article >
    )
}