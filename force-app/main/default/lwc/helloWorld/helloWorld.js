import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname='Ankit Choudhary';
    title =  'Salesforce developer';

    address = {
        city:'Patna',
        state:'Bihar',
        postcode:'800014'
    }

    inputChangeHandler = (e) => {
        e.preventDefault();

        this.title = e.target.value;
    }
    cityInputChangeHandler = (e) => {
        e.preventDefault();
        
        var city = e.target.value;

        this.address = {...this.address, city};
    }
    
    students = ['Ankit','Messi','Ronaldo','Neymar','Mbappe','Haaland','Werner'];
    studentRollNumber = -1;
    rollInputChangeHandler = (e) => {
        e.preventDefault();
        
        var value = e.target.value;

        if(value >= 1 && value <= this.students.length){
            this.studentRollNumber = value;     
        }else{
            this.studentRollNumber = 0;
        }

    }

    get studentName() {
        if(this.studentRollNumber == -1){
            return 'Please enter a roll number';
        }else if(this.studentRollNumber == 0){
            return 'Invalid Roll Number';
        }
        return this.students[this.studentRollNumber - 1];
    }
}