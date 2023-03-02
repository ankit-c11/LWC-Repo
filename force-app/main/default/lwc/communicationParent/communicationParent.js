import { LightningElement, api } from 'lwc';

export default class CommunicationParent extends LightningElement {
    carouselDetails = [{src:'https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
                    header:'First Card',
                    description:'First Card Description'
                    },
                       {src:'https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg',
                    header:'Second Card',
                    description:'Second Card Description'
                    },
                       {src:'https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg',
                    header:'Third Card',
                    description:'Third Card Description'
                    }];

    percentage = 0;

    changeHandler = (e) => {
        this.percentage = e.target.value;
    }

    handleClick = (e) => {
        this.template.querySelector('c-child-action-call-by-parent').resetSlider();
    }
}