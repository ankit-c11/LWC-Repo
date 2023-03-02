import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    user
    @api 
    get userDetails(){
        return this.user;
    }
    set userDetails(data){
        var location = 'Patna';
        this.user = {...data, location};
    }
}