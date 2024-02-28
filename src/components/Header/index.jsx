"use client"
import styles from './header.module.css'
import { Button, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo_icon from '../../../public/logo_icon.png'
import logo_nome from '../../../public/logo_nome.png'
import { useState } from 'react'

export default function Header() {

    const [isOpenMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = (open) => {
        setOpenMenu(open)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container_navigation}>
                <Navbar collapseOnSelect expand="lg" className={styles.navigation + ' container'} onToggle={handleOpenMenu}>
                    <Navbar.Brand href="/" className={styles.logo}>
                        <Image className={styles.logo_icon} src={logo_icon} alt='logotipo icone' />
                        <Image className={styles.logo_nome} src={logo_nome} alt='logotipo nome' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggleMenu}>
                        {isOpenMenu ? <i className="bi bi-x-lg" /> : <i className="bi bi-list" />}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" className={styles.navigation_content}>
                        <Nav className={styles.ul_content}>
                            <Link href='#home' className={styles.link_item} passHref>Home</Link>
                            <Link href='#about' className={styles.link_item} passHref>About Us</Link>
                            <Link href='#services' className={styles.link_item}>Services</Link>
                            <Link href='#projects' className={styles.link_item}>Projects</Link>
                            <Button
                                className={styles.btn_header}
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