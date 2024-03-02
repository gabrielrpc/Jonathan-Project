'use client'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './about.module.css'
import Image from 'next/image'
import image9 from '../../../public/slide_image9.jpg'
import image5 from '../../../public/slide_image5.jpg'
import { motion } from 'framer-motion'

export default function About() {

    return (
        <Container id="about" className={styles.about + ' container_flex'}>
            <Row className={styles.content_about}>
                <Col xs={12} className={styles.about_text}>
                    <h2><span>About </span>Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row className={styles.content_about_images}>
                <Col xs={6} xl={{ order: 1, span: 4 }} xxl={{ span: 4 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image className={styles.image_single + ' d-none d-md-block'} src={image9} alt='trabalhadores' />
                    </motion.div>
                </Col>
                <Col xs={6} xl={{ order: 3, span: 4 }} xxl={{ span: 4 }}>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image className={styles.image_single + ' d-none d-md-block ' + styles.image_single_t} src={image5} alt='trabalhadores' />
                    </motion.div>
                </Col>
                <Col xl={{ order: 2, span: 4 }} xxl={{ span: 4 }} className={styles.mission_content + ' mt-md-2 mt-xl-0'}>
                    <motion.article
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3, delay: 0 * 0.2 }}
                        className={styles.mission_content_div}
                    >
                        <h3><span>Expert</span> Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquams a qui nisi, in officia dignissimos perspiciatis?</p>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3, delay: 1 * 0.2 }}
                        className={styles.mission_content_div}
                    >
                        <h3><span>Expert</span> Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquams a qui nisi, in officia dignissimos perspiciatis?</p>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3, delay: 2 * 0.2 }}
                        className={styles.mission_content_div}
                    >
                        <h3><span>Expert</span> Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquams a qui nisi, in officia dignissimos perspiciatis?</p>
                    </motion.article>

                </Col>
            </Row>
        </Container>
    )
}