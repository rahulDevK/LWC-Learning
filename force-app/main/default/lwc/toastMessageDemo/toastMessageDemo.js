import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class ToastMessageDemo extends LightningElement {
    showToast(title, message, variant, mode = 'dismissible') {
        const sfdcUrl = 'http://www.salesforce.com/'
        const lwcUrl = 'https://developer.salesforce.com/docs/component-library/'
        const toastEvent = new ShowToastEvent({
            title,
            // message,
            message,
            messageData: [
                'Salesforce',
                {
                    url: sfdcUrl,
                    label: 'here'
                },
                'LWC',
                {
                    url: lwcUrl,
                    label: 'here'
                }
            ],
            variant,
            mode
        })
        this.dispatchEvent(toastEvent);
    }

    showSuccessToastHandler() {
        this.showToast('Success', '{0} Toast Notification Fired! Explore {0} {1}! Learn {2} {3}', 'success', 'sticky');
    }

    showInfoToastHandler() {
        this.showToast('Info', 'This is Info toast', 'info', 'sticky');
    }

    showErrorToastHandler() {
        this.showToast('Error', 'This is Error toast', 'error', 'dismissible');
    }

    showWarningToastHandler() {
        this.showToast('Warning', 'This is Warning toast', 'warning');
    }
}