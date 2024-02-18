'use client'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './hero.module.css'
import Image from 'next/image'
import trabalhadores from '../../../public/trabalhadores_hero.jpg'
import useWindowSize from '@/hooks/useWindowSize'

export default function Hero() {

    const { width } = useWindowSize()

    return (
        <Container fluid={width <= 991}>
            <Row className={styles.content_hero}>
                <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 6 }} className={styles.hero_text}>
                    <h1>Transform Your Space with <span>Expert Services</span></h1>
                    <p className={styles.hero_text_p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquam eos beatae molestiae magnam ipsa tempora voluptatibus a qui nisi, in officia dignissimos perspiciatis?</p>
                    <Button>Get a Quote</Button>

                    <div className={styles.hero_numbers}>
                        <div>
                            <span>400+</span>
                            <p>Projects Done</p>
                        </div>
                        <div>
                            <span>280+</span>
                            <p>Satisfied Customers</p>
                        </div>
                    </div>
                </Col>
                <Col lg={{ order: 2}} className={styles.image_content}>
                    <Image className={styles.image} src={trabalhadores} alt='trabalhadores' />
                </Col>
            </Row>
        </Container>
    )
}