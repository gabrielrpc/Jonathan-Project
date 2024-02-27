import styles from './footer.module.css'
import Image from 'next/image'
import logo from '../../../public/logo_provisoria.jpg'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <Row className={styles.footer_content}>
                <Col className={styles.footer_logo}>
                    <Image className={styles.image} src={logo} alt='logotipo' />
                    <p>“Transforming Spaces, Transforming Lives”</p>
                </Col>
                <Col className={styles.footer_info}>
                    <h5>Navigation</h5>
                    <p><a href="#home" className={styles.footer_link}>home</a></p>
                    <p><a href="#about" className={styles.footer_link}>About Us</a></p>
                    <p><a href="#services" className={styles.footer_link}>Services</a></p>
                    <p><a href="#projects" className={styles.footer_link}>Projects</a></p>
                </Col>

                <Col className={styles.footer_info}>
                    <h5>Social</h5>
                    <p><a href="#" className={styles.footer_link}>facebook</a></p>
                    <p><a href="#" className={styles.footer_link}>instagram</a></p>
                    <p><a href="#" className={styles.footer_link}>tiktok</a></p>
                    <p><a href="#" className={styles.footer_link}>X</a></p>
                </Col>
            </Row>
            <Row className={styles.copy}>
                <Col><p>Copyright <sup>&copy;</sup> 2024 Gabriel Carvalho</p></Col>
            </Row>
        </footer >
    )
}