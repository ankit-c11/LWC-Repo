import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handleFooterChange(e){
        this.template.querySelector('footer').classList.remove('slds-hide')
    }
}