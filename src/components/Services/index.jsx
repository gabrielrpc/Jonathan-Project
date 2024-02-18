"use client"
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './services.module.css'
import trabalhadores from '../../../public/trabalhadores_hero.jpg'
import Image from 'next/image'
import Cards from '../Cards'
import { useState } from 'react'

export default function Services() {

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <Row className={styles.content_services}>
                <Col className={styles.services_text}>
                    <h2>Our <span>Services</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row>
                <Col className={styles.card_content}>
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                </Col>
                {/* more services */}
            </Row>
            <Row className={open ? styles.row_display_show : styles.row_display}>
                <Col className={styles.card_content}>
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                    <Cards
                        images={trabalhadores}
                        text='Some quick example text to build on the card title and make up the
                    bulk of the cards content.'
                        title='Card Title'
                    />
                </Col>
                {/* more services */}
            </Row>
            <Row className={styles.more}>
                <Button variant="primary" onClick={() => setOpen(!open)} className={styles.btn_more}>{!open ? 'All Services' : 'Close'}</Button>
            </Row>
        </Container>
    )
}