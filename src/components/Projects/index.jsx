"use client"
import { Col, Container, Row } from 'react-bootstrap'
import styles from './projects.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { images } from './images'
import { useState } from 'react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


export default function Projects() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <Container id='projects'>
            <Row className={styles.content_projects}>
                <Col xs={12} className={styles.projects_text}>
                    <h2><span>Recently</span> projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>

                <Col lg={{span: 8, offset: 2}}>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{
                            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={styles.carousel_principal}
                    >
                        {images.map((image, index) => {
                            return (<SwiperSlide key={index} >
                                <div className={styles.content_image_principal}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className={styles.image_principal}
                                    />
                                </div>
                            </SwiperSlide>)
                        })}
                    </Swiper>
                </Col>

                <Col lg={{span: 8, offset: 2}} className='d-none d-md-block'>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={12}
                        slidesPerView={6}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={styles.thumbs + ' img-thumbnail'}
                    >
                        {images.map((image, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <button className={styles.button_slide}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className={styles.thumbs_image}
                                        />
                                    </button>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </Col>
            </Row>
        </Container>
    )
}