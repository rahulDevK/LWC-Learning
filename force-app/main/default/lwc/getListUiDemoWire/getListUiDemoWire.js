import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import TITLE from '@salesforce/schema/Contact.Title'
import NAME from '@salesforce/schema/Contact.Name'
export default class GetListUiDemoWire extends LightningElement {
    contacts
    pageToken = null
    previousPageToken = null
    nextPageToken = null
    firstPage = false
    lastPage = false
    @wire(getListUi, { objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts', pageSize: 10, sortBy: NAME, pageToken: '$pageToken' })
    loadAllContacts({ data, error }) {
        if (data) {
            this.contacts = data.records.records
            this.nextPageToken = data.records.nextPageToken
            this.previousPageToken = data.records.previousPageToken
            this.firstPage = this.previousPageToken ? false : true;
            this.lastPage = this.nextPageToken ? false : true;
            console.log(data)
        } else {
            console.error(error)
        }
    }

    handlePrevious() {
        this.pageToken = this.previousPageToken
    }
    handleNext() {
        this.pageToken = this.nextPageToken
    }
}