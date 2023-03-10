import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavigateToHome extends NavigationMixin(LightningElement) {

    navigateToHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }
    navigateToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }
    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    navigateToNewRecordDefaultValues(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName:'Zero',
            LastName:'Hero',
            LeadSource:'Other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValues
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filter:'Recent'
            }
        })
    }
    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}