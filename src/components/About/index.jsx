import { Col, Container, Row } from 'react-bootstrap'
import styles from './about.module.css'
import Image from 'next/image'
import image9 from '../../../public/slide_image9.jpg'
import image5 from '../../../public/slide_image5.jpg'

export default function About() {

    return (
        <Container id="about" className={styles.about}>
            <Row className={styles.content_about}>
                <Col xs={12} className={styles.about_text}>
                    <h2><span>About </span>Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia dignissimos perspiciatis?</p>
                </Col>
            </Row>
            <Row className={styles.content_about_images}>
                <Col xs={6} xl={{order: 1, span: 4}} xxl={{ span: 4}}>
                    <Image className={styles.image_single + ' d-none d-md-block'} src={image9} alt='trabalhadores' />
                </Col>
                <Col xs={6} xl={{order: 3, span: 4}} xxl={{ span: 4}}>
                    <Image className={styles.image_single + ' d-none d-md-block ' + styles.image_single_t} src={image5} alt='trabalhadores' />
                </Col>
                <Col xl={{order: 2, span: 4}} xxl={{span: 4}} className={styles.mission_content + ' mt-md-2 mt-xl-0'}>
                    <div>
                        <h3>Attention to <span>Details</span></h3>
                        <p>Our team is meticulous, ensuring precise tile installation and achieving high-quality results by paying close attention to every detail in each project.</p>
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