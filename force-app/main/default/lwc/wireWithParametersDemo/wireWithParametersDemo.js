import { api, LightningElement, wire } from 'lwc';
import filterAccounts from '@salesforce/apex/AccountController.filterAccounts'
export default class WireWithParametersDemo extends LightningElement {
    @api accountType
    @wire(filterAccounts, { type: '$accountType' })
    accounts
}