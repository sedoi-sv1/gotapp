import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Предупреждение!
        </div>
    );
}

const Block = styled.div`
    
margin-bottom: 4
0px;

`;

const BlockBan = styled.div`
    
button {
    height: 40px;
    width: 200px;
} `;

const BlockW = styled.div`
.warning {
    background-color: red;
    text-align: center;
    width: 100%;
    padding: 10px;

    font-size: 14pt;
    color: white;
}

`;

function handleSubmit(e) {
    e.preventDefault();
    
        alert(1);
    
}


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    
    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
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
                        <RandomChar/>
                    </Col>
                </Row>
                <Container>
                    <Block>  
                        <form onSubmit={handleSubmit}>
                            <button type="submit" className="btn btn-primary">Отправить</button>
                        </form>
                    </Block>
                    <BlockW>
                    <WarningBanner warn={this.state.showWarning} />
                    </BlockW> 
                    
                    <BlockBan>
                    <div>
                        
                        <button onClick={this.handleToggleClick}>
                            {this.state.showWarning ? 'Скрыть' : 'Показать'}
                        </button>
                    </div>
                    </BlockBan >
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
