import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    showGreeting = false;
    greetingButtonLabel = 'Show Greetings'
    city = ''
    greetingHandler() {
        this.showGreeting = !this.showGreeting;
        this.greetingButtonLabel = this.showGreeting ? 'Hide Greetings' : 'Show Greetings';
    }

    cityTrackHandler(event) {
        this.city = event.target.value;
    }

    get rightCity() {
        return this.city === 'Nagpur';
    }
}