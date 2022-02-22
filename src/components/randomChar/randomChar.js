import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spiner';

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
        char: {},
        /* Когда загружается компонент это состояние state   */
        loading: true
    }

    onCharLoaded = (char) => {
        /* Принимает нашего персонажа (char) и устанавливает state */
        this.setState({
            char,
            /* при получении персонажа loading выставляем в  false */
            loading: false 
        })
    }
    /* Создаём функцию обновления персонажа*/
    updateChar() {
        /* Получаем id floor округляет до единицы. Math.random() * 140 + 25 возвращает случайное число в заданном интервале
        от 25 до 140 */
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
        const {char, loading } = this.state;
    /* Если наш state loading возвращяем наш Spiner  
        if(loading) {
            return <Spinner/>
        }*/

        /* Если loading true или folse далее теренарная операция если loading true то
        в вёрстке <Spinner/> если folse то null*/
        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <View char = {char} /> : null;

        return (
            <div className="random-block rounded"> 
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    /* Вытаскиваем из пропса char данные  */
    const {name, gender, born, died, culture} = char;
    return (
       <>
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
       </> 
    )
}


/* 31:02 2.2 описать */
