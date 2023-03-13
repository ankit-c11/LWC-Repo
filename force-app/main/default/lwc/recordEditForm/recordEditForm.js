import { LightningElement } from 'lwc';
import CONTACT from '@salesforce/schema/Contact'
import NAME from '@salesforce/schema/Contact.Name'
import TITLE from '@salesforce/schema/Contact.Title'
import PHONE from '@salesforce/schema/Contact.Phone';
import EMAIL from '@salesforce/schema/Contact.Email';
import ACCOUNT from '@salesforce/schema/Contact.AccountId'



export default class RecordEditForm extends LightningElement {
    objectName = CONTACT;

    fields = {
        accountField:ACCOUNT,
        nameField:NAME,
        titleField:TITLE,
        phoneField:PHONE,
        emailField:EMAIL
    }

    handleReset(){
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(f =>{
                f.reset();
            })
        }
    }
}