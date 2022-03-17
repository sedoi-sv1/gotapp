import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spiner';
import ErrorMessange from '../errorMessange';


export default class RandomChar extends Component {
    /* Когда создастся инстонс RandomChar у него будетвызван метод this.updateChar() стр 28 */
    /* Создаём новый инстанс services */
    GotService = new gotService();

    /* Состояние компонента меняется каждую секунду создаём объект стейт (state)
    Получаем данные которые поместим в приложение */
    state = {
        /* изначально данные null до получения с сервера пустой объект char 
        созданный  gotService*/
        char: {},
        /* Когда загружается компонент это состояние state   */
        loading: true,
        error: false
    }
    /* функция componentDidMount запускается когда компонент успешно отрисовался */
    componentDidMount() {
        this.updateChar();
    /* Запускаем функцию setInterval() берём команду this.updateChar запускаем
    через полторы секунды Так как мы используем контекст вызова this.updateChar 
    метод updateChar переделываем в стрелочную функцию на сроке 56 */
        this.timerId = setInterval(this.updateChar, 1500);
    }
    /* Функция componentWillUnmount запускается когда удаляется компонент кнопкой останавливается setInterval функцией clearInterval(this.timerId) */
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        /* Принимает нашего персонажа (char) и устанавливает state */
        this.setState({
            char,
            /* при получении персонажа loading выставляем в  false */
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            /* Если произошла ошибка error: true а loading: false */
            error: true,
            loading: false
        })
    }
    /* Создаём функцию обновления персонажа*/
    // пояснения в строке 15 было updateChar() { стала стрелочная функция
    updateChar = () => {
        /* Получаем id floor округляет до единицы. Math.random() * 140 + 25 возвращает случайное число в заданном интервале
        от 25 до 140 */
        const id = Math.floor(Math.random() * 140 + 25);
        //const id = 130000;
        
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
                .then(this.onCharLoaded)
            /*Прописываем свойство промиса .catch() оно выполнится когда
            произойдёт ошибка в свойство передаём функцию onError */
                .catch(this.onError);    

    }

    render() {

      /* Вытаскиваем из объекта char с помощю деструкторизации {char:} данные */
        const {char, loading, error } = this.state;
        const errorMessange =  error ? <ErrorMessange/> : null;
        /* Если наш state loading возвращяем наш Spiner  
        if(loading) {
            return <Spinner/>
        }*/

        /* Если loading true или folse далее теренарная операция если loading true то
        в вёрстке <Spinner/> если folse то null*/
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char = {char} /> : null;

        return (
            <div className="random-block rounded"> 
                {errorMessange}
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


/* 39:02 2.2 описать */
