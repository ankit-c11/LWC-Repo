import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues,getPicklistValuesByRecordType  } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
export default class WireGetPicklistValueDemo extends LightningElement {

    fieldName = INDUSTRY_FIELD;
    options = [];
    value = '';
    objectData

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectData

    @wire(getPicklistValues, {recordTypeId:'$objectData.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    picklistValueHandler({data}){
        if(data){
            this.options = data.values;
        }
    }

    handleChange(event){
        this.value = event.target.value;
    }
    //----------------------------------------------------c/childActionCallByParent
    typeOptions = [];
    typeValue = '';



    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId:'$objectData.data.defaultRecordTypeId'})
    picklistValuesHandler({data}){
        if(data){
            this.typeOptions = data.picklistFieldValues[TYPE_FIELD.fieldApiName].values;
        }
    }

    handleTypeChange(e){
        this.typeValue = e.target.value;
    }
}