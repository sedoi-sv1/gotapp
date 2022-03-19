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
        this.gotService.getAllChacters()
        /* Получив промес обрабатываем с помощю .then помещаем в неё стрелочную
        функцию получаем .then(charList)  */
        .then ((charList) => {
            /*В которой установим состояние charList  */
            this.setState({
                charList
            })
        })
    }


    render() {
        /* Сщздаём переменную charList которую вытаскиваем из this.state */
        const {charList} = this.state;
        /* 12 02 */
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}