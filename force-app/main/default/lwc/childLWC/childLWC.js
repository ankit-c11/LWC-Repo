import { LightningElement } from 'lwc';

export default class ChildLWC extends LightningElement {
    constructor(){
        super()
        console.log('Child constructor called');
    }
    connectedCallback(){
        console.log('Child Connected');
    }
    renderedCallback(){
        console.log('Child rendered');
    }
    disconnectedCallback(){
        console.log('Child unmounted')
    }
}