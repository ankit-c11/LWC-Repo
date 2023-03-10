import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavToExternalWebPage extends NavigationMixin(LightningElement) {
    navigateToWeb(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__webPage',
            attributes:{ 
                url: 'http://salesforce.com'
            }
        })
    }
}