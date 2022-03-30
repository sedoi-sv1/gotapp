import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


/*function RandomCha(props) {
    if (!props.char) {
        return null;
    }

    return (
        <RandomChar/>
    );
}*/

export default class App extends Component {

    /*constructor(props) {
        super(props);
        this.state = {showChar: true};
        this.charToggleClick = this.charToggleClick.bind(this);
    }*/

    state = {
        showRandomChar: true,
        /* состояние показывающее выбраного персонажа */
        selectedChar: 130
    };
    
    /*charToggleClick() {
        this.setState(state => ({
            showChar: !state.showChar
        }));
    }*/

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

    /* Создаём обработчик событий который будет устанавливать выбранный id в selectedChar */
    onCharSelected = (id) => {
        this.setState({selectedChar: id
        })
    }
    
render() {
    const char = this.state.showRandomChar ? <RandomChar/> : null;
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {/*<RandomCha char={this.state.showChar}/>*/}
                        {char}
                        <button
                            className='btn btn-primary'
                            onClick={this.toggleRandomChar}>toggle random character</button>
                    </Col>
                </Row>
                {/*<Container>
                    <button type="button" className="btn btn-primary " onClick={this.charToggleClick}>
                            {this.state.showChar ? 'Скрыть' : 'Показать'}
                    </button> 
                    
                </Container>*/}
                
                <Row>
                    <Col md='6'>
                        {/* Берём id передаём на уровень выше в app.js */}
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        {/* Передаём выбранный id в CharDetails  */}
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
}        
    
}