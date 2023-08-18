export class AbstractView{
    constructor(){
        this.title = "My App";
    }
    setTitle(title){
        document.title = title;
    }
    async getHtml(){
        return ''
    }
}