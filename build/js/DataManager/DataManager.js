import santizeHtml from 'sanitize-html';
export class DataManager{
    constructor(){
        this.localSorage = window.localStorage;
        console.log(localStorage);
    }
}