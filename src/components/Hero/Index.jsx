'use client'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './hero.module.css'
import Image from 'next/image'
import hero_image from '../../../public/hero_image.jpg'
import { motion } from 'framer-motion'

export default function Hero() {

    return (
        <Container className={styles.content} fluid>
            <Row className={styles.content_hero}>
                <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 6 }} className={styles.hero_text}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>Transform Your Space with <span>Expert Services</span></h1>
                        <p className={styles.hero_text_p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquam eos beatae molestiae magnam ipsa tempora voluptatibus a qui nisi, in officia dignissimos perspiciatis?</p>
                        <Button>Get a Quote</Button>

                        <div className={styles.hero_numbers}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3, delay: 0 * 0.1 }}
                            >
                                <span>400+</span>
                                <p>Projects Done</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3, delay: 1 * 0.1 }}
                            >
                                <span>280+</span>
                                <p>Satisfied Customers</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </Col>
                <Col md={{ order: 2 }} className={styles.image_content}>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image className={styles.image} src={hero_image} alt='hero_image' />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}