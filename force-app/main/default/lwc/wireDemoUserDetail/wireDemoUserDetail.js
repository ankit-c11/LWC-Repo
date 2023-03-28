import { LightningElement,wire } from 'lwc';
import Id from  '@salesforce/user/Id'
import { getRecord  } from 'lightning/uiRecordApi';

export default class WireDemoUserDetail extends LightningElement {
    userId = Id;

    userDetails
    @wire(getRecord,{recordId:'$userId',fields:['User.Name','User.Email']})
    userDetailHandler({data,error}){
        if(data){
            this.userDetails = data.fields
        }else if(error){
            console.log(error)
        }
    }

}