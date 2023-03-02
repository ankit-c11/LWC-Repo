import { LightningElement,wire } from 'lwc';
import SAMPLEMC  from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, MessageContext, subscribe,unsubscribe } from 'lightning/messageService';

export default class LmsComponentB extends LightningElement {
    receivedMessage
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessgae();
    }

    subscribeMessgae(){
       subscribe(this.context, SAMPLEMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE});
    }

    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "No message published";
    }
}