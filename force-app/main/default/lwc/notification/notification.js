import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Notification extends LightningElement {
    toastHandler(){
        const evt = new ShowToastEvent({
            title:'Success',
            message:'Account Created!!',
            variant:'success'
        })
        this.dispatchEvent(evt);

    }
    
    toastHandlerErr(){
        const evt = new ShowToastEvent({
            title:'Error',
            message:'Error occured!',
            variant:'error'
        })
        this.dispatchEvent(evt);

    }
}