import { LightningElement } from 'lwc';

export default class ConditionalLWC extends LightningElement {
    income = null;
    message = 'You are eligible for the loan';
    inputChangeHandler = (e) => {
        e.preventDefault();

        var value = e.target.value;

        if(isNaN(value)){
            this.income = 0;
        }else{
            this.income = Number(value);
        }
    }


    get incomeString(){
        if(this.income === null){
            return 'Enter your income';
        }
        return `Your annual income: ${this.income}`;
    }
    get aboveThreshold(){
        return (this.income > 10000);
    }
    buttonText = 'Show Data';
    clicked = false;
    handleClick = (e) =>{
        e.preventDefault();
        this.clicked = !(this.clicked);
        if(this.clicked){
            this.buttonText = 'Hide Data';
        }
        else{
            this.buttonText = 'Show Data';
        }
    }

    get isClicked(){
        return this.clicked;
    }


}