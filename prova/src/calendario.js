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
                    <Card.Title>2021.1</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Card.Text>
                    <small className="text-muted"></small>
                    </Card.Text>
                    <Card.Text>
                    </Card.Text>
                    <Card.Text>
                    <small className="text-muted"></small>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>2021.2</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Card.Text>
                    <small className="text-muted"></small>
                    </Card.Text>
                    <Card.Text>
                    </Card.Text>
                    <Card.Text>
                    <small className="text-muted"></small>
                    </Card.Text>
                </Card.Body>
            </Card>
          </section>    
        </div>
    );
}

export default Calendario;