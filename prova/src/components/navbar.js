import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bar(){
    return(
        <div>    
            <Navbar bg="success" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#slider">TADS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#ap">Apresentação</Nav.Link>
                        <Nav.Link href="#pro">Projeto</Nav.Link>
                        <Nav.Link href="#ca">Calendário</Nav.Link>
                        <Nav.Link href="#cli">Clíma</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Bar;