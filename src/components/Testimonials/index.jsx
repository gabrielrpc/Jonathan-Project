"use client"
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import styles from './projects.module.css'
import Image from 'next/image'
import { useState } from 'react'
import liam from '../../../public/liam.png'
import emma_cliente from '../../../public/emma_cliente.png'
import manson from '../../../public/manson.png'


export default function Testimonials() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className={styles.testimonials}>
            <Row className={styles.content_testimonials}>
                <Col lg={5} className={styles.testimonials_text}>
                    <h2>Feedbacks From <span>Happy Clients</span></h2>
                    <p>we take immense pride in delivering exceptional services that truly transform our customers living spaces. but don&rsquo;t just take our word for it.</p>
                </Col>

                <Col xs={10} lg={5} className={styles.text_content}>
                    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-testimonials'>
                        <Carousel.Item>
                            <p>
                                &quot; I couldn&rsquo;t be happier with the new flooring on my balcony! The team did an amazing job, and the results exceeded my expectations. Now I can enjoy my morning coffee outside in style. Thank you for the excellent service!&quot;
                            </p>
                            <div className={styles.person}>
                                <Image src={emma_cliente} className={styles.image} alt='Delighted Customer' />
                                <div>
                                    <span>Emma Smith</span>
                                    <p>Delighted Customer</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p>
                                &quot;I couldn&rsquo;t be happier with the outcome of my bathroom flooring renovation! The tiles look fantastic, and the installation process was seamless. It&rsquo;s like having a brand new bathroom. Highly recommend their services!&quot;
                            </p>
                            <div className={styles.person}>
                                <Image src={liam} className={styles.image} alt='Satisfied Client' />
                                <div>
                                    <span>Liam J.</span>
                                    <p>Satisfied Client</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p>
                                &quot;I&rsquo;m so impressed  the professionalism and expertise of the team that replaced the flooring in my bathroom. The attention to detail is remarkable, and the end result is beyond my expectations. Thank you for a job well done!&quot;
                            </p>
                            <div className={styles.person}>
                                <Image src={manson} className={styles.image} alt='Happy Customer' />
                                <div>
                                    <span>Mason B.</span>
                                    <p>Happy Customer</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>
        </Container>
    )
}