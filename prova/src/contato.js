import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato(){
    return(
        <div>
            <section>
                <Card>
                    <Card.Body>
                        <Card.Title>Contatos</Card.Title>
                        <br></br>
                        <Card.Text>
                            <small className="text-muted">Coordenação do Programa: CARLA DA COSTA FERNANDES CURVELO</small>
                        </Card.Text>
                        <Card.Text>
                            Telefone/Ramal: (84) 3342-2297/227 | E-mail: tads@eaj.ufrn.br
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>    
        </div>
    );
}

export default Contato;