import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessange from '../errorMessange'
import gotService from '../../services/gotService';

export default class CharacterPage extends Component {

    GotService = new gotService();

    state  = {
        selectedChar: 130,
        error: false
    }

     /* Создаём обработчик событий который будет устанавливать выбранный id в selectedChar */
    onCharSelected = (id) => {
        this.setState({selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessange/>
        }
        return(
            <Row>
            <Col md='6'>
                {/* Берём id передаём на уровень выше в app.js */}
                <ItemList 
                    onCharSelected={this.onCharSelected}
                    getData= {this.GotService.getAllChacters}/>
            </Col>
            <Col md='6'>
                {/* Передаём выбранный id в CharDetails  */}
                <CharDetails charId={this.state.selectedChar}/>
            </Col>
        </Row>
        )
    }
}