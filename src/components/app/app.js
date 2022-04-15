import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessange from '../errorMessange';
import CharacterPage from '../characterPage';


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
        
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }
    
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


    
render() {
    const char = this.state.showRandomChar ? <RandomChar/> : null;

    if (this.state.error) {
        return <ErrorMessange/>
    }

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

                <CharacterPage/>
                <CharacterPage/>
                <CharacterPage/>
            
            </Container>
        </>
    )
}        
    
};