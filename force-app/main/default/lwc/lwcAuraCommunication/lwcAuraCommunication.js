import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
@api title
callAura(){
    this.dispatchEvent(new CustomEvent('sendmsg',{detail:{msg:'My message from LWC to Aura'}}))
}
}