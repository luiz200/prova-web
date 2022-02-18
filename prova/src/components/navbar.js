import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bar(){
    return(
        <div>    
            <Container fluid>
                <Navbar bg="success" expand="lg" variant="dark" fixed="top">
                    <Navbar.Brand href="#slider">TADS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#ap">Apresentação</Nav.Link>
                        <Nav.Link href="#pro">Projeto</Nav.Link>
                        <Nav.Link href="#ca">Calendário</Nav.Link>
                        <Nav.Link href="#cli">Clima</Nav.Link>
                        <Nav.Link href="#con">Contatos</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default Bar;