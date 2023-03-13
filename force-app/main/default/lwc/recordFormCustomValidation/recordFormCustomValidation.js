import { LightningElement } from 'lwc';
import ACCOUNT from '@salesforce/schema/Account'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class RecordFormCustomValidation extends LightningElement {
    objectName = ACCOUNT;
    name = '';

    handleChange = e => {
        this.name = e.target.value;
    }
    handleSubmit = e => {
        e.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');

        if(!inputCmp.value.includes('Australia')){
            inputCmp.setCustomValidity("The account name must include 'Australia'.")
        }else{
            inputCmp.setCustomValidity('')
            const fields = e.detail.fields;
            fields.Name = inputCmp.value

            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }

        inputCmp.reportValidity();
    }
    successHandler = event =>{
        this.dispatchEvent(new ShowToastEvent({
            title:'Record created successfully',
            message:`Record ID: ${event.detail.id}`,
            variant:'success'
        }))
    }

    errorHandler = event =>{
        this.dispatchEvent(new ShowToastEvent({
            title:'Error creating record',
            message:`${event.detail.message}`,
            variant:'error'
        }))
    }
}