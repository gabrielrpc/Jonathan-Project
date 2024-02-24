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
        <Container id='services'>
            <Row className={styles.content_services}>
                <Col className={styles.services_text}>
                    <h2>Our <span>Services</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row className={styles.card_content}>
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
            </Row>
        </Container>
    )
}