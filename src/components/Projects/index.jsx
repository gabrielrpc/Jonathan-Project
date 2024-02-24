"use client"
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import styles from './projects.module.css'
import Image from 'next/image'
import slide from '../../../public/slide_image.jpg'
import slide1 from '../../../public/slide_image1.jpg'
import slide2 from '../../../public/slide_image2.jpg'
import { useState } from 'react'


export default function Projects() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container id='projects' fluid className={`${styles.projects} bg-degrade`}>
            <Row className={styles.content_projects}>
                <Col xs={12} className={styles.projects_text}>
                    <h2><span>Recently</span> projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>

                <Col xs={12} lg={9}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <div className="d-flex align-items-center justify-content-center">
                                <Image className={styles.image_principal} src={slide} alt='trabalhadores' />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex align-items-center justify-content-center">
                                <Image className={styles.image_principal} src={slide1} alt='trabalhadores' />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex align-items-center justify-content-center">
                                <Image className={styles.image_principal} src={slide2} alt='trabalhadores' />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            {/*                 <Col className={styles.content_images_display}>
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                    <Image className={styles.image_slide} src={trabalhadores} alt='trabalhadores' />
                </Col> */}

        </Container>
    )
}