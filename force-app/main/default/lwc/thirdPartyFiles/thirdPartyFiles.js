import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader'

export default class ThirdPartyFiles extends LightningElement {
    currentDate;

    isLibLoaded = false;

    renderedCallback(){
        if(!this.isLibLoaded){
            Promise.all([
                loadStyle(this,ANIMATE+'/animate.min.css'),
                loadScript(this, MOMENT+'/moment.js')
            ]).then(()=>{
                this.setDateOnScreen();
            })
            .catch(err => {
                console.log({err});
            })
            this.isLibLoaded = true;
        }
        
    }

    setDateOnScreen = () => {
        this.currentDate = moment().format('LLLL');
    }
}