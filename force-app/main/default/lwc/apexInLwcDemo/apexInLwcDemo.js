import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import filterAccountByIndustry from '@salesforce/apex/AccountController.filterAccountByIndustry';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry';
export default class ApexInLwcDemo extends LightningElement {
    accounts;
    accountsFiltered;
    industryValue = '';
    industryOptions;

    @wire(getPicklistValues,{ recordTypeId: '012000000000000AAA', fieldApiName: INDUSTRY_FIELD })
    industryPicklistDataHandler({data,error}){
        if(data){
            console.log(data)
            this.industryOptions = data.values;
        }
        else if(error){
            console.log(error)
        }
    }

    @wire(getAccounts)
    accountsHandler({data,error}){
        if(data){
            console.log(data)
            this.accounts = data;
        }else if(error){
            console.log(error)
        }
    }

    @wire(filterAccountByIndustry, {industry:'$industryValue'})
    accountsFilteredHandler({data}){
        if(data){
            this.accountsFiltered = data;
        }
    }

    handleIndustryChange = (e) => {
        this.industryValue = e.target.value;
        console.log('industry changed to ', this.industryValue);
    }
}