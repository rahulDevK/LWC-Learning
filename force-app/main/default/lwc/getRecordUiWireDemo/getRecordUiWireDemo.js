import { api, LightningElement, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi'
export default class GetRecordUiWireDemo extends LightningElement {
    @api recordId
    contactObject = [
        { fieldName: 'FirstName', label: 'First Name' },
        { fieldName: 'Title', label: 'Title' },
        { fieldName: 'MobilePhone', label: 'Mobile Phone' },
    ]
    @wire(getRecordUi, { recordIds: '$recordId', layoutTypes: ['Full'], modes: ['Edit'] })
    loadRecordUi({ data, error }) {
        if (data) {
            console.log(data)
            this.contactObject = this.contactObject.map(item =>
                ({ ...item, value: data.records[this.recordId].fields[item.fieldName].value })
            )
        } else {
            console.log(error)
        }
    }
}