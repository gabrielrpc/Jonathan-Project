import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './hero.module.css'
import Image from 'next/image'
import hero_image from '../../../public/hero_image.jpg'

export default function Hero() {

    return (
        <Container className={styles.content} fluid>
            <Row className={styles.content_hero}>
                <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 6 }} className={styles.hero_text}>
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
                <Col md={{ order: 2}} className={styles.image_content}>
                    <Image className={styles.image} src={hero_image} alt='hero_image' />
                </Col>
            </Row>
        </Container>
    )
}