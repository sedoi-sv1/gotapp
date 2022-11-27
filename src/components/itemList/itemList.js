import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spiner'; /* Импортируем Spiner во внутрь нашего компонента */
export default class ItemList extends Component {

    
    /* Создаём стёйт в котором булет хранится список персонажей charList
    изначально null*/
    state = {
        itemList: null
    }
    /* Используем жизненый цикл при успешной отрисовке componentDidMount()
    получаем персонажи */
    componentDidMount() {
        /* Создаём переменную в которую передаём как проперти функцию
        getData получать будем из this.props   */
        const {getData} = this.props;

        getData()
        /* Получив промес обрабатываем с помощю .then помещаем в неё стрелочную
        функцию получаем .then(charList)  */
        .then ((itemList) => {
            /*В которой установим состояние charList  */
            this.setState({
                itemList
            })
        })
        
    }
    /* Создаём метод renderItems возврещяющий список из api он будет создавать массив (arr) */
    renderItems(arr) {
        /* этот метод будет возвращять перебор этого массива
        берём arr перебираем .map передаём во внутрь колбэк функцию (item 'каждый элемент' i 'порядковый номер') */
        return arr.map ((item, i) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            /* стрелочная функция возвращяет элемент вёрстки */
            return(
                <li
                /* При береборке массива в реакте указываем номер элемента */
                    key={id}
                    className="list-group-item"
                    /* Каждому элементу передаём обработчик события что бы выбрать персонажа
                    который будет принимать в себя метод onCharSelected с номером i {this.props.onCharSelected(i)} */
                    onClick={ () => this.props.onCharSelected(41 + i)}
                    >
                    {/* каждый элемент будет принимать имя */}
                    {label}
                </li>
            )
        })
    }


    render() {
        /* Сщздаём переменную charList которую вытаскиваем из this.state */
        const {itemList} = this.state;
        /* Если стейт не готов */
        if (!itemList) {
            /* Из функции render возвращять Spiner  */
            return <Spinner/>
        }
        /* Метод renderItems используем в вёрстке
        Создаём переменную items в которой используем метод this.renderItems(сюда передаём charList) */
        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
        {/* помещаем в вёрстку переменную items */}    
            {items}
            </ul> 
            
        );
    }
}