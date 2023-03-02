import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    fetchDetailHandler = (e) => {
        e.preventDefault();
        let elements = this.template.querySelectorAll('.name');
        // console.log(elements)
        Array.from(elements).forEach(e => {
            e.style.border = 'dotted 2px red';
            e.setAttribute("title",e.innerText)
        });

        

    }
    users=['Ankit','Messi','Ronaldo','Neymar','Mbappe','Haaland','Werner'];
}