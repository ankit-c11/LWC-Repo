import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'

export default class StaticImage extends LightningElement {
    userImage = USER_IMAGE;
}