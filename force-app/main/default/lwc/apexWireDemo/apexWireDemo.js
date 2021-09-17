import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'
export default class ApexWireDemo extends LightningElement {
    accountList = []
    @wire(getAccounts)
    accounts

    @wire(getAccounts)
    loadAccounts({ data, error }) {
        if (data) {
            this.accountList = data.map(item => {
                const newType = item.Type === 'Customer - Direct' ? 'Direct' :
                    item.Type === 'Customer - Channel' ? 'Channel' : '------';
                return { ...item, newType }
            })
        } else {
            console.log(error)
        }
    }
}