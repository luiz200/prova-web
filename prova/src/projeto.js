import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projeto(){
    return(
        <div>    
            <Card>
                <Card.Body>
                    <Card.Title>Projeto Pedagógico do Curso</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <ul className="card-list">
                            <li className="list-item">
                                Avaliações in loco do INEP/MEC;
                            </li>
                            <li className="list-item">
                                Relatórios de ENADE;
                            </li>
                            <li className="list-item">
                                Autoavaliações coordenadas pela Assessoria Acadêmica de Graduação da EAJ;
                            </li>
                            <li className="list-item">
                                Diálogo junto aos docentes (incluindo os orientadores acadêmicos) e discentes;
                            </li>
                            <li className="list-item">
                                Relatórios das avaliações docentes pelos discentes;
                            </li>
                            <li className="list-item">
                                Relatórios das avaliações da infraestrutura pelos discentes.
                            </li>
                          </ul>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Projeto;