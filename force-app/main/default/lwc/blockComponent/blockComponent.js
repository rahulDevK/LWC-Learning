import { api, LightningElement } from 'lwc';

export default class BlockComponent extends LightningElement {
    @api word;
    @api cardOpen;

    blockClickHandler() {
        debugger;
        if (!this.cardOpen) {
            this.cardOpen = true;
            let trueEvent = new CustomEvent('open', { detail: { word: this.word } });
            this.dispatchEvent(trueEvent);
            console.log('Event dispatched');
        }
    }
}