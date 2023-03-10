import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'


export default class NavToRecordPage extends NavigationMixin(LightningElement) {
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030p00000dLVXGAA4',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030p00000dLVXGAA4',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Memory_Game_LWC'
            }
        })
    }
    
}