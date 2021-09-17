import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
import NAME from '@salesforce/schema/Account.Name'
import TYPE from '@salesforce/schema/Account.Type'
import INDUSTRY from '@salesforce/schema/Account.Industry'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
const fields = [NAME, TYPE, INDUSTRY, ANNUAL_REVENUE]
export default class WireDemoAccountDetails extends LightningElement {
    accountId = '0016D00000Wk9MyQAJ'
    accountDetails
    dynamicAccountDetails
    /* @wire(getRecord, { recordId: '0016D00000Wk9MyQAJ', fields: ['Account.Name', 'Account.Type'] })
    accountDetailsHandler(response) {
        if (response.data) {
            console.log('Data');
            console.log(response.data)
            console.log(`Name: ${response.data.fields.Name.value}`)
            console.log(`Type: ${response.data.fields.Type.value}`)
        } else if (response.error) {
            console.log('Error');
            console.log(response.error)
        }
    } */

    //Wire Adaptor Using Functions
    //@wire(getRecord, { recordId: '0016D00000Wk9MyQAJ', fields:fields })
    @wire(getRecord, { recordId: '0016D00000Wk9MyQAJ', fields })
    accountDetailsHandler({ data, error }) {
        if (data) {
            this.accountDetails = data.fields
        } else if (error) {
            console.log(error)
        }
    }

    //Wire Adaptor Using Properties
    @wire(getRecord, { recordId: '0016D00000Wk9MyQAJ', fields })
    accountDetailsProperty

    //Using variable in wire adaptor
    @wire(getRecord, { recordId: '$accountId', fields })
    accountDetailsHandlerDyanmic({ data, error }) {
        if (data) {
            this.dynamicAccountDetails = data.fields
        } else if (error) {
            console.log(error)
        }
    }
}