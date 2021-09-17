import { LightningElement, track } from 'lwc';

export default class HelloWorldLWC extends LightningElement {
    /*** Data Binding ***/
    title = 'Hello World of LWC!'
    fullName = 'Aura'
    changeHandler(event) {
        this.fullName = event.target.value;
    }

    /*** Using @track Properties ***/
    @track
    address = {
        city: ' London',
        postcode: 'OM1 1HA',
        country: 'UK'
    }

    person = {
        name: 'RK',
        skill: 'js'
    }

    addressTrackHandler(event) {
        this.address.city = event.target.value;
    }

    /*** Without using @track Properties ***/
    personTrackHandler(event) {
        this.person = { ...this.person, skill: event.target.value };
    }

    /*** Using Getters ***/
    cities = ['London', 'Oslo', 'Kiev', 'Warsaw'];
    num = 12;
    get polishCapital() {
        return this.cities[3];
    }

    get numberSquare() {
        return this.num * this.num;
    }
}