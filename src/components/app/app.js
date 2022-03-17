import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


function RandomCha(props) {
    if (!props.char) {
        return null;
    }

    return (
        <RandomChar/>
    );
}

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {showChar: true};
        this.charToggleClick = this.charToggleClick.bind(this);
    }
    
    charToggleClick() {
        this.setState(state => ({
            showChar: !state.showChar
        }));
    }
    
render() {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomCha char={this.state.showChar}/>
                    </Col>
                </Row>
                <Container>
                    <button type="button" className="btn btn-primary " onClick={this.charToggleClick}>
                            {this.state.showChar ? 'Скрыть' : 'Показать'}
                    </button> 
                    
                </Container>
                
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
}        
    
}
