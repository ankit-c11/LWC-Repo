import { LightningElement, api } from 'lwc';

export default class CommunicationChild extends LightningElement {
    @api message;
    @api cardHeading
}