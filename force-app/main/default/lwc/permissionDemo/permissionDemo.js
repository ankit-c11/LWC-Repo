import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import hasCustomPermission from '@salesforce/customPermission/show_details'

export default class PermissionDemo extends LightningElement {
    get hasViewAllDataAvailable(){
        return hasViewAllData;
    }
    get hasCustomPermissionAvailable(){
        return hasCustomPermission;
    }
}