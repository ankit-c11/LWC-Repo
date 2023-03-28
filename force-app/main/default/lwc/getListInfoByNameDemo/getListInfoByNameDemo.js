import { LightningElement, wire } from 'lwc';
import { getListInfoByName } from 'lightning/uiListsApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetListInfoByNameDemo extends LightningElement {
    error;
    displayColumns;
    @wire(getListInfoByName, {
        objectApiName: ACCOUNT_OBJECT.objectApiName,
        listViewApiName: 'AllAccounts'
    })listInfo({ error, data }) {
        if (data) {
            console.log(data)
            this.displayColumns = data.displayColumns;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.displayColumns = undefined;
        }
    }
}