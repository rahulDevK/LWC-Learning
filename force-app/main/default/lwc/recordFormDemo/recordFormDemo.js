import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ACC_OBJECT from '@salesforce/schema/Account'
import NAME from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import TYPE from '@salesforce/schema/Account.Type'
import INDUSTRY from '@salesforce/schema/Account.Industry'
export default class RecordFormDemo extends LightningElement {
    objectName = ACC_OBJECT
    @track fieldList = [NAME, ANNUAL_REVENUE, TYPE, INDUSTRY]

    successHandler(event) {
        console.log(event.detail)
        console.log(event.detail.id)
        const evt = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record Id: ' + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(evt);
    }
}