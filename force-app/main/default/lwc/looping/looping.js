import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    footballClubs= ['FC Barcelona', 'Manchester United',"Juventus", "Chelsea","Real Madrid"];

    teams = [{name:'FC Barcelona',captain:'Sergio Busquets'},{name:'Manchester United',captain:'Bruno Fernandes'},{name:"Juventus",captain:'Leonardo Bonucci'},{name:"Chelsea",captain:'Cesar Azpilicueta'},{name:"Real Madrid",captain:'Karim Benzema'}]; 
}