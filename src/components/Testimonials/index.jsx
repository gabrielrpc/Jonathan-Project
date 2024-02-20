"use client"
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import styles from './projects.module.css'
import trabalhadores from '../../../public/trabalhadores_hero.jpg'
import Image from 'next/image'
import { useState } from 'react'


export default function Testimonials() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <Row className={styles.content_testimonials}>
                <Col lg={5} className={styles.testimonials_text}>
                    <h2>Feedbacks From <span>Happy Clients</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>

                <Col xs={8} lg={5} className={styles.text_content}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                    <div className={styles.person}>
                        <div className={styles.image}></div>
                        <div>
                            <span>name</span>
                            <p>sobre</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}