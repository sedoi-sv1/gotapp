
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
        const res = await this.getResource('/characters?page=5&pageSize=10');    
        return res.map(this._transformCharacter);
    }
    
    getChacter(id) {
        return this.getResource(`/characters/${id}`);
    }
    
    async getAllHouses() {
        const character = await this.getResource(`/houses/`);
        return this._transformCharacter(character);
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }
    
    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}`);
    
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.cultu
        }
    }
}




    /* 10 min 20 sec  урок 2.2 описать*/ 