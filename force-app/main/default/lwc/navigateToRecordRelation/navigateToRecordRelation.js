import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToRecordRelation extends NavigationMixin(LightningElement) {
    navigateToRelatedList(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordRelationshipPage',
            attributes:{ 
                recordId:'0010p00001BtIT0AAN',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}