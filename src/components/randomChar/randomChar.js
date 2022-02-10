import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';

export default class RandomChar extends Component {
    /* Когда создастся инстонс RandomChar у него будетвызван метод this.updateChar() стр 28 */
    constructor() {
    super();
    this.updateChar();
    }
    /* Создаём новый инстанс services */
    GotService = new gotService();
    


    /* Состояние компонента меняется каждую секунду создаём объект стейт (state)
    Получаем данные которые поместим в приложение */
    state = {
        /* изначально данные null до получения с сервера пустой объект char 
        созданный  gotService*/
        char: {}
    }

    onCharLoaded = (char) => {
        this.setState({char})
    }
    /* Создаём функцию обновления персонажа*/
    updateChar() {
        /* Получаем id */
        const id = Math.floor(Math.random() * 140 + 25);
        /*О писывается функция  this.GotService.getChacter(id) Используем id получаем новый инстонс (стр 8) this.gotService 
        и исползуем метод .getCharacter получаем определёный id(стр 25)
        эта конструкция (this.GotService.getChacter(id)) возвращяет промис
        и его надо обработать исполюзуем метод .then() во внутрь помещаем стрелочную 
        функцию которая будет принимать данные с сервера ((char) => {}) 
        Получив данные от сервиса устанавливаем в state (стр 14)
        this.setState({name: char.name вытаскиваем данные персонажа }) 
        this.GotService.getChacter(id)
        Возвращяется с сервера объект с данными  
            .then((char) => {
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    born: char.born,
                    died: char.died,
                    culture: char.culture
                })
            }); */

            this.GotService.getChacter(id)
                .then(this.onCharLoaded);

    }

    render() {

    /* Вытаскиваем из объекта char с помощю деструкторизации {char:} данные */
        const {char:{name, gender, born, died, culture} } = this.state;

        

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}


/* 9:00 2.2 описать */
