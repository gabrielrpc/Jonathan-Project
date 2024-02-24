"use client"
import { Col, Container, Row } from 'react-bootstrap'
import styles from './projects.module.css'
import Image from 'next/image'
import trabalhadores from '../../../public/trabalhadores_hero.jpg'


export default function Projects() {

    return (
        <Container id='projects'>
            <Row className={styles.content_projects}>
                <Col className={styles.projects_text}>
                    <h2><span>Recently</span> projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row className={styles.image_content}>
                <Col md={12} lg={10} className={styles.content_image_principal}>
                    <Image className={styles.image_principal} src={trabalhadores} alt='trabalhadores' />
                </Col>
                <Col className={styles.content_images_display}>
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                </Col>
            </Row>
        </Container>
    )
}