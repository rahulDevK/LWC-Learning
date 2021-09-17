import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'
export default class ApexImperativeDemo extends LightningElement {
    accounts
    getAccountListHandler() {
        getAccounts().then((result) => {
            this.accounts = result
        }).catch((error) => {
            console.log(error)
        })
    }

}