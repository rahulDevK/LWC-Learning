import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class CreateRecordWireDemo extends LightningElement {
    formFields = {}

    changeHandler(event) {
        const { name, value } = event.target
        this.formFields[name] = value
    }

    createContact() {
        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields: this.formFields }
        createRecord(recordInput).then(result => {
            this.showToastEvent('Contact Created', `Contact Created Successfully ${result.id}`, 'success')
            this.template.querySelector('form.fields').reset();
            this.formFields = {}
        }).catch(error => {
            console.log(error)
            this.showToastEvent('Contact Not Created', error.body.message, 'error')
        })
    }

    showToastEvent(title, message, variant) {
        const evt = new ShowToastEvent({
            title,
            message,
            variant: variant || 'success'
        })
        this.dispatchEvent(evt)
    }

    cancelAction() {
        this.template.querySelector('form.fields').reset();
        this.formFields = {}
    }
}