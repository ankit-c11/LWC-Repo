import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';
import IsGuest from '@salesforce/user/isGuest'

export default class CurrentUserDetails extends LightningElement {
    userProperties = {
        Id, IsGuest
    }
}