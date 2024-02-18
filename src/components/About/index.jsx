import { Col, Container, Row } from 'react-bootstrap'
import styles from './about.module.css'
import Image from 'next/image'
import trabalhadores from '../../../public/trabalhadores_hero.jpg'

export default function About() {

    return (
        <Container>
            <Row className={styles.content_about}>
                <Col className={styles.about_text}>
                    <h2><span>About </span>Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row xs={1} className={styles.content_about_images}>
                <Col xs={12} sm={6} xl={{order: 1, span: 4}} className={styles.images_display}>
                    <Image className={styles.image_single} src={trabalhadores} alt='trabalhadores' />
                </Col>
                <Col xs={12} sm={6} xl={{order: 3, span: 4}} >
                    <Image className={styles.image_single} src={trabalhadores} alt='trabalhadores' />
                </Col>
                <Col xl={{order: 2, span: 4}}  className={styles.mission_content}>
                    <div>
                        <h3><span>Expert</span> Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquams a qui nisi, in officia dignissimos perspiciatis?</p>
                    </div>
                    <div>
                        <h3><span>Expert</span> Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquams a qui nisi, in officia dignissimos perspiciatis?</p>
                    </div>
                    <div>
                        <h3><span>Expert</span> Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reprehenderit dolorum esse quod unde deleniti quisquams a qui nisi, in officia dignissimos perspiciatis?</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}