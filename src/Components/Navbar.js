import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from "react-dom";
import {FaSearch} from 'react-icons/fa'

import "../index.css"

export default class Navbar extends React.Component {
    render() {
        return(
            <div >
                <Container style={{padding: 0, margin: 0}}>
                    <Row>
                        <Col className="text-center">
                            <h3>FoodTok</h3>
                        </Col>
                        <Col xs={6}>
                            <div>
                                <FaSearch/>
                                <input placeholder="Search"/>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

ReactDOM.render(<Navbar/>, document.getElementById('root'));