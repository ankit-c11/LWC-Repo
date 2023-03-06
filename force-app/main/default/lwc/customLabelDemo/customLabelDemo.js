import { LightningElement } from 'lwc';
import loremOne from '@salesforce/label/c.lorem';
import loremTwo from '@salesforce/label/c.loremTwo';

export default class CustomLabelDemo extends LightningElement {
    labels = {
        loremOne,
        loremTwo
    }
}