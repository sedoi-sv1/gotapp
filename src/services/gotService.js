
export default class GotService {
    
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

async getResource(url) {
    
    const res = await fetch(`${this._apiBase}${url}`);
    
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
    }
    return await res.json();        
    };

    async getAllChacters() {
        /* Промежуточная переменная res в которую помещяем донные сервера массив персонажей */
        const res = await this.getResource('/characters?page=5&pageSize=10');
        /* Метод map вызывает переданную функцию callback this._transformCharacter 
         один раз для каждого элемента массива res   */    
        return res.map(this._transformCharacter);
    }
    
    async getChacter(id) {
        const character = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(character);
    }
    
    async getAllHouses() {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }

    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}`)
        return this._transformHouse(house);
    }
    
    async getAllBooks() {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }
    
    async getBook(id) {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    
    }

     /* функция принимающая объект char и возвращяющяя данные */   
    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            neme: book.name,
            namberOfPages: book.namberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}




    /* 10 min 20 sec  урок 2.2 описать*/ 