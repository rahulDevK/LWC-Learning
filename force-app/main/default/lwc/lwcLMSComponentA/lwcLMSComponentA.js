import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import LMS1 from '@salesforce/messageChannel/FirstMessageChannel__c'

export default class LwcLMSComponentA extends LightningElement {
    inputValue

    @wire(MessageContext)
    context;

    publishMessage(event) {
        let message;
        if (event.target.label.includes('LWC')) {
            message = {
                lmsData: {
                    value: this.inputValue
                }
            }
        } else {
            message = {
                auraData: {
                    value: this.inputValue
                }
            }
        }
        publish(this.context, LMS1, message)
    }

    inputValueHandler(event) {
        this.inputValue = event.target.value;
    }
}