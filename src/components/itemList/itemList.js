import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService';
export default class ItemList extends Component {

    /* Когда создастся инстонс RandomChar у него будет вызван метод this.updateChar() стр 28 */
    /* Создаём новый инстанс services */
    GotService = new gotService();
    /* Создаём стёйт в котором булет хранится список персонажей charList
    изначально null*/
    state = {
        charList: null
    }
    /* Используем жизненый цикл при успешной отрисовке componentDidMount()
    получаем персонажи */
    componentDidMount() {
        this.GotService.getAllChacters()
        /* Получив промес обрабатываем с помощю .then помещаем в неё стрелочную
        функцию получаем .then(charList)  */
        .then ((charList) => {
            /*В которой установим состояние charList  */
            this.setState({
                charList
            })
        })
    }
    /* Создаём метод renderItems возврещяющий список из api он будет создавать массив (arr) */
    renderItems(arr) {
        /* этот метод будет возвращять перебор этого массива
        берём arr перебираем .map передаём во внутрь колбэк функцию (item 'каждый элемент' i 'порядковый номер') */
        return arr.map ((item, i) => {
            /* стрелочная функция возвращяет элемент вёрстки */
            return(
                <li
                /* При береборке массива в реакте указываем номер элемента */
                    key={i}
                    className="list-group-item"
                    /* Каждому элементу передаём обработчик события что бы выбрать персонажа
                    который будет принимать в себя метод onCharSelected с номером i {this.props.onCharSelected(i)} */
                    onClick={ () => this.props.onCharSelected(i)}
                    >
                    {/* каждый элемент будет принимать имя */}
                    {item.name}
                </li>
            )
        })
    }


    render() {
        /* Сщздаём переменную charList которую вытаскиваем из this.state */
        const {charList} = this.state;
<<<<<<< HEAD
        /* Если стейт не готов */
        if (!charList) {
            /* Из функции render возвращять Spiner  */
            return <Spinner/>
        }
        /* Метод renderItems используем в вёрстке
        Создаём переменную items в которой используем метод this.renderItems(сюда передаём charList) */
        const items = this.renderItems(charList);
=======
        /* 12 02 */
>>>>>>> parent of 3844ada (22.03.22 после обеда)
        return (
            <ul className="item-list list-group">
        {/* помещаем в вёрстку переменную items */}    
            {items}
            </ul> 
            
        );
    }
}