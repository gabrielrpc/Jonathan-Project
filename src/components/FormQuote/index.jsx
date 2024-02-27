"use client"
import styles from './form.module.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export default function FormQuote() {
    return (

        <Container className={styles.container_contact} id='contact'>
            <Row className={styles.contact_title}>
                <h2><span>Contact</span> us</h2>
                <p>Need more information or you want to make a quote <br /> Just write us a message!</p>
            </Row>
            <Row className={styles.contact}>
                <Col xs={12} md={5} className={styles.content_contact}>
                    <h3>Contact Information</h3>
                    <p>Fill up the form. Our team will get back to you as soon possible</p>

                    <div>
                        <p>
                            <i class="bi bi-telephone-fill" />
                            <a className={styles.contact_link} href="#"> +999 123 456 789</a>
                        </p>
                        <p>
                            <i class="bi bi-envelope-at-fill" />
                            <a className={styles.contact_link} href="#"> Email@email.com</a></p>
                    </div>
                </Col>
                <Col className={styles.content_form}>
                    <Form className={styles.form}>
                        <div>
                            <Form.Label className={styles.form_label}>Name :</Form.Label >
                            <Form.Control
                                placeholder="Type your name"
                                type="name"
                                className={styles.form_input}
                            />
                        </div>

                        <div>
                            <Form.Label className={styles.form_label}>E-mail :</Form.Label >
                            <Form.Control
                                placeholder="Type your e-mail"
                                type="email"
                                className={styles.form_input}
                            />
                        </div>

                        <div>
                            <Form.Label className={styles.form_label}>Phone :</Form.Label >
                            <Form.Control
                                placeholder="Type your phone number"
                                type='tel'
                                className={styles.form_input}
                            />
                        </div>

                        <div>
                            <Form.Label className={styles.form_label}>Message :</Form.Label>
                            <Form.Control
                                placeholder="Type your message"
                                as="textarea"
                                className={styles.form_textarea}
                            />
                        </div>

                        <Button className={styles.btn_form} type='submit'>Send message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}