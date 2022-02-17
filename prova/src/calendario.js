import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calendario(){
    return(
        <div>
          <section>
            <Card className="shadow-sm card mb-3 border-bottom">
                <Card.Body>
                    <Card.Title>Calendário</Card.Title>
                    <br></br>
                      <h5 className="card-title">2021.1</h5>
                      <p className="card-text">14/05/2021 à 21/05/2021</p>
                      <p className="card-text"><small class="text-muted">Matrícula para o período 2021.1</small></p>
                      <p className="card-text">07/06/2021 à 08/06/2021</p>
                      <p className="card-text"><small class="text-muted">Re-matrícula para o período 2021.1</small></p>
                      <p className="card-text">07/06/2021</p>
                      <p className="card-text"><small class="text-muted">Início do período letivo 2021.1</small></p>
                      <p className="card-text">14/06/2021</p>
                      <p className="card-text"><small class="text-muted">Início do período trancamento de turma 2021.1</small></p>
                      <p className="card-text">16/07/2021</p>
                      <p className="card-text"><small class="text-muted">Término do período trancamento de turma 2021.1</small></p>
                      <p className="card-text">31/10/2021</p>
                      <p className="card-text"><small class="text-muted">Término do período letivo 2021.1</small></p>
                    <br></br>
                    <h5 className="card-title">2021.2</h5>
                      <p className="card-text">30/09/2021 à 07/10/2021</p>
                      <p className="card-text"><small class="text-muted">Matrícula para o período 2021.2</small></p>
                      <p className="card-text">18/10/2021 à 20/10/2021</p>
                      <p className="card-text"><small class="text-muted">Re-matrícula para o período 2021.2</small></p>
                      <p className="card-text">04/10/2021</p>
                      <p className="card-text"><small class="text-muted">Início do período letivo 2021.2</small></p>
                      <p className="card-text">25/10/2021</p>
                      <p className="card-text"><small class="text-muted">Início do período trancamento de turma 2021.2</small></p>
                      <p className="card-text">26/11/2021</p>
                      <p className="card-text"><small class="text-muted">Término do período trancamento de turma 2021.2</small></p>
                      <p className="card-text">19/02/2022</p>
                      <p className="card-text"><small class="text-muted">Término do período letivo 2021.2</small></p>
                </Card.Body>
            </Card>
          </section>    
        </div>
    );
}

export default Calendario;