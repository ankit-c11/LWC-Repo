import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.callSubscriber();
    }
    callSubscriber(){
        pubsub.subscribe('componentA',function(message){
            this.message = message;
        }.bind(this))
    }
}