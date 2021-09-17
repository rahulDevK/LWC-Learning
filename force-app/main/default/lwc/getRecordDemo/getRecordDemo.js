import { LightningElement, api, wire } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
const fields = [NAME_FIELD, OWNER_FIELD, ANNUALREVENUE_FIELD]
export default class GetRecordDemo extends LightningElement {
    @api recordId
    accName
    accOwner
    accAnnualRevenue
    //Get Record Data Using Fields
    //@wire(getRecord, { recordId: '$recordId', fields })
    //Get Record Data Using layout type
    @wire(getRecord, { recordId: '$recordId', layoutTypes: ['Full'], modes: ['View'] })
    loadRecordData({ data, error }) {
        if (data) {
            console.log(data)
            // this.accName = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value;
            // this.accAnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value;
            // this.accOwner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value;

            this.accName = getFieldValue(data, NAME_FIELD)
            this.accAnnualRevenue = getFieldDisplayValue(data, ANNUALREVENUE_FIELD)
            this.accOwner = getFieldValue(data, OWNER_FIELD)
        } else {
            console.log(error)
        }
    }
}