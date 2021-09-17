import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import CONTACT_OBJ from '@salesforce/schema/Contact'
import ACCOUNT from '@salesforce/schema/Contact.AccountId'
import NAME from '@salesforce/schema/Contact.Name'
import TITLE from '@salesforce/schema/Contact.Title'
import PHONE from '@salesforce/schema/Contact.Phone'
import EMAIL from '@salesforce/schema/Contact.Email'
export default class RecordEditFormDemo extends LightningElement {
    objectName = CONTACT_OBJ
    recordId = '0036D00000OhDTiQAN'
    fields = {
        accountField: ACCOUNT,
        nameField: NAME,
        titleField: TITLE,
        phoneField: PHONE,
        emailField: EMAIL
    }

    successHandler(event) {
        this.handleReset();
        const evt = new ShowToastEvent({
            title: 'Contact Created',
            message: 'Record Id: ' + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(evt);
    }

    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field');
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
}