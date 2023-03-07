import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import FONTAWESOME from '@salesforce/resourceUrl/fontawesome'

export default class MemoryGame extends LightningElement {
    libLoaded = false;

    cards = [
        {id: 1, listClass:'card',type:'subway', icon:'fa fa-subway'},
        {id: 2, listClass:'card',type:'pencil',icon:'fa fa-pencil'},
        {id: 3, listClass:'card',type:'font',icon:'fa fa-font'},
        {id: 4, listClass:'card',type:'hippo',icon:'fa fa-hippo'},
        {id: 5, listClass:'card',type:'glasses',icon:'fa fa-glasses'},
        {id: 6, listClass:'card',type:'video',icon:'fa fa-video'},
        {id: 7, listClass:'card',type:'virus',icon:'fa fa-virus'},
        {id: 8, listClass:'card',type:'walking',icon:'fa fa-walking'},
        {id: 9, listClass:'card',type:'hippo',icon:'fa fa-hippo'},
        {id: 10, listClass:'card',type:'pencil',icon:'fa fa-pencil'},
        {id: 11, listClass:'card',type:'glasses',icon:'fa fa-glasses'},
        {id: 12, listClass:'card',type:'font',icon:'fa fa-font'},
        {id: 13, listClass:'card',type:'subway', icon:'fa fa-subway'},
        {id: 14, listClass:'card',type:'virus',icon:'fa fa-virus'},
        {id: 15, listClass:'card',type:'walking',icon:'fa fa-walking'},
        {id: 16, listClass:'card',type:'video',icon:'fa fa-video'}
    ];

    connectedCallback(){
        
    }

    renderedCallback(){
        if(!this.libLoaded){
            Promise.all([
                loadStyle(this, FONTAWESOME+'/fontawesome/css/all.css')
            ]).then(()=>{
                console.log('fontawesome loaded')
            }) 
            .catch(err=>{
                console.log(err)
            })
            this.libLoaded = true;
            let count = {};
        for(let card of this.cards){
            if(count.hasOwnProperty('card.type')){
                count[card.type] += 1;
                console.log('paired')
            }
            else{
                count[card.type] = 1;
            }
        }
        console.log(count)
        }    
    }

}