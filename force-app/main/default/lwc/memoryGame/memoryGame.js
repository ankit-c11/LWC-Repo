import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import FONTAWESOME from '@salesforce/resourceUrl/fontawesome'

export default class MemoryGame extends LightningElement {
    libLoaded = false;
    gameStart = false;
    ENABLE = 'ENABLE'
    DISABLE = 'DISABLE'
    timer = '00:00'
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

    openedCards = [];
    matchedCards = [];
    moves = 0;

    restart(){
        if(this.gameStart){
            clearInterval(this.intervalId);
        }
        this.gameStart = false;
        this.timer = '00:00';
        this.openedCards = [];
        this.matchedCards = [];
        this.moves = 0;
        Array.from(this.template.querySelectorAll('.card')).forEach(card => {
            card.className = 'card'
        })
        this.shuffle();
    }

    connectedCallback(){
        this.shuffle();
    }

   shuffle(){
        let cards = [...this.cards]

        for(let j = 0; j < 50; j++){
            let a = Math.floor(Math.random()*16);
            let b = Math.floor(Math.random()*16);

            [cards[a],cards[b]] = [cards[b],cards[a]];
        }
        this.cards = cards;
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
        }
    }

    displayCard(event){
        if(!this.gameStart){
            this.gameStart = true;
            let startTime = new Date();

            this.intervalId = setInterval(() => {
                let diff = new Date().getTime() - startTime.getTime();
                let d = Math.floor(diff/1000); //converting to seconds

                let m = Math.floor(d/60);
                let s = (d%60);
                if(s <= 9){
                    s = '0' + s;
                }
                if(m <= 9){
                    m = '0' + m;
                }
                this.timer = `${m}:${s}`;

            },1000)
        }
        let currentCard = event.target;
        currentCard.classList.add("open","show","disabled");

        this.openedCards = this.openedCards.concat(event.target);

        if(this.openedCards.length == 2){
            this.moves = this.moves+1;

            let [card1, card2] = this.openedCards;
            if(card1.type == card2.type){
                this.matchedCards = this.matchedCards.concat(card1,card2);
                this.matched();
            }else{
                this.unmatched();
            }
            if(this.matchedCards.length == this.cards.length){
                clearInterval(this.intervalId);
            }
        }
    }

    matched(){
        let [card1, card2] = this.openedCards;
        card1.classList.add('match','disabled');
        card1.classList.remove('open','show');
        card2.classList.add('match','disabled');
        card2.classList.remove('open','show');

        this.openedCards = [];
    }

    unmatched(){
        let [card1, card2] = this.openedCards;
        card1.classList.add('unmatch');
        card2.classList.add('unmatch');
        this.action(this.DISABLE)
        setTimeout(()=>{
            card1.classList.remove('open','show','unmatch');
            card2.classList.remove('open','show','unmatch');
            this.action(this.ENABLE);
            this.openedCards = [];
        },1100)
    }
    action(action){
        let gcards = this.template.querySelectorAll('.card');

        Array.from(gcards).forEach(card =>{

            if(action ==  this.ENABLE){
                let matched = card.classList.contains('match');

                if(!matched){
                    card.classList.remove('disabled')
                }
            }else{

                card.classList.add('disabled');
            }
        })
    }
}