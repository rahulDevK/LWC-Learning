import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi'
export default class DeleteRecordWireDemo extends LightningElement {
    recordId
    changeHandler(event) {
        this.recordId = event.target.value
    }
    deleteHandler() {
        deleteRecord(this.recordId).then(() => {
            console.log(`Record Deleted Successfully`)
            this.recordId = ''
        }).catch(() => {
            console.log('Record Deletion failed')
        })
    }
}