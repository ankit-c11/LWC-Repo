import { LightningElement } from 'lwc';

export default class ChildToParentCommunication extends LightningElement {
    showModal = false;
    message;
    clickHandler(e){
        e.preventDefault();
        this.showModal = !this.showModal;
    }
    closeHandler(e){
        this.message = e.detail;
        this.showModal = !this.showModal;
    }
}