import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bar(){
    return(
        <div>    
            <Navbar bg="success" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href={'index.html'}>TADS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas navVariante="success" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title  id="offcanvasNavbarLabel">TADS</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 bg-sucess" >
                        <Nav.Link href={'index.html'}>Apresentação</Nav.Link>
                        <Nav.Link href={'projeto.html'}>Projeto Pedagógico do Curso</Nav.Link>
                        <Nav.Link href={'calendario.html'}>Calendário</Nav.Link>
                        <Nav.Link href={'clima.html'}>Clíma</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default Bar;