
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo_provisoria.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <Row className={styles.footer_content}>
                <Col className={styles.footer_logo}>
                    <Image className={styles.image} src={logo} alt='logotipo' />
                    <p>“Transforming Spaces, Transforming Lives”</p>
                </Col>
                <Col className={styles.footer_info}>
                    <h3>Navigation</h3>
                    <p>home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Projects</p>
                </Col>

                <Col className={styles.footer_info}>
                    <h3>Social</h3>
                    <p>facebook</p>
                    <p>instagram</p>
                    <p>tiktok</p>
                    <p>X</p>
                </Col>
            </Row>
            <Row className={styles.copy}>
                <Col><p>Copyright <sup>&copy;</sup> 2024 Seu Nome</p></Col>
            </Row>
        </footer >
    )
}