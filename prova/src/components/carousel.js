import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Carouse(){
    return(
        <Carousel variant="dark">
        <Carousel.Item>
            <img className="d-block w-100 h-50" src={require('./1.jpeg')}/>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 h-50" src={require('./2.jpg')}/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 h-50" src={require('./3.png')}/>
        </Carousel.Item>
        </Carousel>
    );
}

export default Carouse;