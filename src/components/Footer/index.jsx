import styles from './footer.module.css'
import Image from 'next/image'
import logo_icon from '../../../public/logo_icon.png'
import logo_nome from '../../../public/logo_nome.png'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <Row className={styles.footer_content}>
                <Col xs={12} md={4} className={styles.footer_logo}>
                    <div className={styles.logo}>
                        <Image className={styles.logo_icon} src={logo_icon} alt='logotipo' />
                        <Image className={styles.logo_nome} src={logo_nome} alt='logotipo' />
                    </div>
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