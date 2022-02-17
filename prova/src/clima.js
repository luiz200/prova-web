import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Clima(){
    fetch('https://api.hgbrasil.com/weather?format=json-cors&key=910fdc2a')
    .then((response)=> {
        response.json()
    }).then((data) => {
        const list = document.querySelector('#text');
        data.map((item) =>{
            const p = document.createElement('p');

            p.setAttribute('date', item.date)
            p.innerHTML = item.temp;
            list.appendChild(p);
        })
    });
    return(
        <div>    
            <Card>
                <Card.Body>
                    <Card.Title>Clima</Card.Title>
                    <Card.Text id="text"></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Clima;