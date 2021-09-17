import { LightningElement } from 'lwc';

export default class HelloLooping extends LightningElement {
    carList = ['Tiago', 'Nexon', 'Altroz', 'Harrier', 'Hexa', 'Safari'];

    ceoList = [
        {
            id: 1,
            name: 'Sundar Pichai',
            company: 'Google'
        },
        {
            id: 2,
            name: 'Elon Musk',
            company: 'Tesla'
        },
        {
            id: 3,
            name: 'Satya Nadela',
            company: 'Microsoft'
        },
        {
            id: 4,
            name: 'Jeff Bezzos',
            company: 'Amazon'
        },
    ]
}