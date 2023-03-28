import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoDemo extends LightningElement {
     defaultRecordTypeId
    objectInfo

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    handleObjectData({data,error}){
        if(data){
            // console.log(data)
            this.defaultRecordTypeId = data.defaultRecordTypeId;
        }
        if(error){
            console.log(error)
        }
    }

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];

    objectInfos

    @wire(getObjectInfos,{objectApiNames:'$objectApiNames'})
    objectsDataHandler({data,error}){
        if(data){
            // console.log(data)
            this.objectInfos = data
        }
        if(error){
            console.log(error)
        }
    }
}