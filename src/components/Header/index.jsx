"use client"
import styles from './header.module.css'
import { Button, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo_provisoria.jpg'

export default function Header() {

    return (
        <header>

            <div className={styles.contact}>
                <a className={styles.item_link} href="#">+999 123 456 789</a>
                <a className={styles.item_link} href="#">Email@email.com</a>

                <div className={styles.social_container}>
                    <a className={styles.item_link} href="#"><i className="bi bi-instagram" /></a>
                    <a className={styles.item_link} href="#"><i className="bi bi-threads" /></a>
                    <a className={styles.item_link} href="#"><i className="bi bi-tiktok" /></a>
                </div>
            </div>

            <div className={styles.container_navigation}>
                <Navbar collapseOnSelect expand="lg" className={styles.navigation + ' container'}>
                    <Navbar.Brand href="/" className={styles.logo}>
                        <Image className={styles.image} src={logo} alt='logotipo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={styles.navigation_content}>
                        <Nav className={styles.ul_content}>
                            <Link href='#home' className={styles.link_item}>Home</Link>
                            <Link href='#about' className={styles.link_item}>About Us</Link>
                            <Link href='#services' className={styles.link_item}>Services</Link>
                            <Link href='#projects' className={styles.link_item}>Projects</Link>
                            <Button
                                className={styles.btn}
                                type='button'
                            >
                                Get A Quote
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </header>
    )
}