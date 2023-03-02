import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {

    changeHandler(){
        console.log('slot got content')
        this.template.querySelector('.slds-card__footer').classList.remove('slds-hide');
    }

}