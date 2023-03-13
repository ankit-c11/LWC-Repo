import { LightningElement,api } from 'lwc';

export default class QuizApp extends LightningElement {
    @api recordId
    questions = [{
        id:'question1',
        question:"Which of the follow has not won Champions League?",
        options:{
            a:'Real Madrid',
            b:'Arsenal',
            c:'Chelsea'
        },
        correctAnswer:'b'
    },
    {
        id:'question2',
        question:"Which of the follow has not won Premier League?",
        options:{
            a:'Spurs',
            b:'Arsenal',
            c:'Chelsea'
        },
        correctAnswer:'a'
    },
    {
        id:'question3',
        question:"Which of the follow has not won FIFA World Cup?",
        options:{
            a:'Brazil',
            b:'Colombia',
            c:'France'
        },
        correctAnswer:'b'
    }
    ]
    correctAnswers = 0;
    isSubmitted = false;
    markedAnswers = {};
    changeHandler= (event) => {
        
        var {name,value} = event.target;
        this.markedAnswers = {...this.markedAnswers,[name]:value}
    }
    get allAnswered(){
        return Object.keys(this.markedAnswers).length == this.questions.length;
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.correctAnswers = this.questions.reduce((acc,q) => {
            console.log(q.correctAnswer);
            if(this.markedAnswers[q.id] == q.correctAnswer){
                return acc+1;
            }
            return acc;
        },0)
        this.isSubmitted = true;
        //console.log(`You answered ${correctAnswers} questions correctly`);
    }
    resetHandler = (e) =>{
        this.template.querySelector('form').reset();
        this.markedAnswers = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}