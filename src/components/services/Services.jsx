
import React from 'react'
import './services.css'
import {Container, Row, Col} from 'reactstrap'
import {motion} from 'framer-motion'


function Services() {
  return <section className="services">
    <Container>
        <Row>
                   
        <Col lg='3' md='4'>
            <motion.div whileHover={{scale: 1.1}} className="service__item" >
                <span>
                    <i class='ri-truck-line'></i>
                </span>
                <div>
                    <h3>Free Shipping</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </motion.div>
                </Col>

             


                <Col lg='3' md='4'>
            <motion.div whileHover={{scale: 1.1}} className="service__item">
                <span>
                    <i class='ri-secure-payment-line'></i>
                </span>
                <div>
                    <h3>Secure Payment</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </motion.div>
                </Col>


                <Col lg='3' md='4'>
            <motion.div  whileHover={{scale: 1.1}}className="service__item">
                <span>
                    <i class='ri-exchange-dollar-line'></i>
                </span>
                <div>
                    <h3>Back Guarantee</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </motion.div>
                </Col>
            
                <Col lg='3' md='4'>
            <motion.div  whileHover={{scale: 1.1}} className="service__item">
                <span>
                    <i class='ri-refresh-line'></i>
                </span>
                <div>
                    <h3>Easy Returns</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </motion.div>
                </Col>
        </Row>
    </Container>
        </section>


    
  
}

export default Services