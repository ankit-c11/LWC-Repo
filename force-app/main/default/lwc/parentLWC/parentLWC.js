import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {
    isVisible
    constructor(){
        super()
        this.isVisible = false;

        console.log('Parent constructor called');
    }
    connectedCallback(){
        console.log('Parent Connected');
    }
    renderedCallback(){
        console.log('Parent rendered');
    }
    handleClick = () => {
        this.isVisible = !this.isVisible;
    }
}