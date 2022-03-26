import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
export default class CharDetails extends Component {

    GotService = new gotService();
    
    state = {
        char: null,
        name: 'house'
    }

    componentDidMount() {
        this.updateChar();
    }

    /* Функция принимающая charId из props */
    updateChar() {
        const {charId} = this.props;
        const id = 130
    
        if (!charId) {
            return;
        }
        this.GotService.getChacter(id)
            .then((char) => {
                /* объект char записываем стейт */

                this.setState({char})
            })
            .catch(this.onError);
    }

    render() {
        if(this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }
        /* Если создан char вытаскиваем переменные из this.state.char */
        const  {name, gender, born, died, culture} = this.state.char;
        //const {name} = this.state;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}