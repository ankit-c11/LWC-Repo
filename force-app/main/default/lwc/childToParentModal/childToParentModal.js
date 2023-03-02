import { LightningElement } from 'lwc';

export default class ChildToParentModal extends LightningElement {
    clickHandler(e){
        e.preventDefault();
        const myEvent = new CustomEvent('close',{detail:'Modal closed successfully'})
        this.dispatchEvent(myEvent);
    }
}