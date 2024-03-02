"use client"
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './services.module.css'
import trabalhadores from '../../../public/trabalhadores_hero.jpg'
import Image from 'next/image'
import Cards from '../Cards'
import { useState } from 'react'
import { data } from './data'
import useWindowSize from '@/hooks/useWindowSize'

export default function Services() {

    const { width } = useWindowSize()
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const numServicosExibidos = mostrarTodos ? data.length : width < 768 ? 2 : 4;

    return (
        <Container id='services' className='container_flex'>
            <Row className={styles.content_services}>
                <Col className={styles.services_text}>
                    <h2>Our <span>Services</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row className={styles.card_content}>
                {data.slice(0, numServicosExibidos).map((servico, index) => (
                    <Cards
                        key={index}
                        title={servico.title}
                        text={servico.text}
                        color={servico.color}
                        images={trabalhadores}
                        index={index}
                    />
                ))}
                <Col xs={12} className='m-auto text-center'>
                    <Button onClick={() => setMostrarTodos(prev => !prev)}>
                        {mostrarTodos ? 'Show less' : 'More services'}
                    </Button>
                </Col>

            </Row>
        </Container>
    )
}