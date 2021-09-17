import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { updateRecord } from 'lightning/uiRecordApi';
const COLS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
    { label: 'Email', fieldName: 'Email', type: 'email', editable: true },
];

export default class UpdateRecordsWireDemo extends LightningElement {
    columns = COLS
    contacts = []
    draftValue = []
    @wire(getListUi, { objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts' })
    loadAllContacts({ data, error }) {
        if (data) {
            console.log(data)
            this.contacts = data.records.records.map(item => {
                return {
                    'Id': this.getValue(item, 'Id'),
                    'Name': this.getValue(item, 'Name'),
                    'Phone': this.getValue(item, 'Phone'),
                    'Title': this.getValue(item, 'Title'),
                    'Email': this.getValue(item, 'Email'),
                }
            })
        } else {
            console.log(error)
        }
    }

    getValue(data, field) {
        return data.fields[field].value;
    }
    handleSave(event) {
        const recordInputs = event.detail.draftValues.map(draft => {
            const fields = { ...draft }
            return { fields: fields }
        })
        console.log('Record Inputs:')
        console.log(recordInputs)
        const promises = recordInputs.map(recordInput => updateRecord(recordInput))
        Promise.all(promises).then(() => {
            console.log('Contact Record Updated Successfully')
            this.draftValue = []
        }).then(error => console.log(error))
    }
}