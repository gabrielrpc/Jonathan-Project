"use client"
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import styles from './projects.module.css'
import trabalhadores from '../../../public/trabalhadores_hero.jpg'
import Image from 'next/image'

export default function Projects() {

    return (
        <Container>
            <Row className={styles.content_projects}>
                <Col className={styles.projects_text}>
                    <h2><span>Recently</span> projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={styles.image_content}>
                    <Image className={`${styles.image} ${styles.image_small}`} src={trabalhadores} alt='trabalhadores' />
                </Col>
                <Col className={styles.image_content_xsmall}>
                    <Image className={`${styles.image} ${styles.image_smalll}`} src={trabalhadores} alt='trabalhadores' />
                    <Image className={`${styles.image} ${styles.image_smalll}`} src={trabalhadores} alt='trabalhadores' />
                </Col>

                {/*                 <Col xs={4} className={styles.image_content}>
                    <Image className={styles.image} src={trabalhadores} alt='trabalhadores' />
                </Col> */}
            </Row>
            <Row className={styles.more}>
                <Button variant="primary" /* onClick={() => setOpen(!open)} */ className={styles.btn_more}>All Projects</Button>
            </Row>
        </Container>
    )
}