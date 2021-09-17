import { LightningElement, wire } from 'lwc';
import { APPLICATION_SCOPE, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import LMS1 from '@salesforce/messageChannel/FirstMessageChannel__c'

export default class LwcLMSComponentX extends LightningElement {
    receivedValue = 'No Message Posted yet'
    subscription

    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeNow();
    }

    subscribeNow() {
        this.subscription = subscribe(this.context, LMS1, (message) => { this.handleMessage(message) }, { scope: APPLICATION_SCOPE })
    }

    handleMessage(message) {
        this.receivedValue = message.lmsData ? message.lmsData.value : this.receivedValue;
    }

    unsubscribeService() {
        unsubscribe(this.subscription)
        this.subscription = null;
    }
}