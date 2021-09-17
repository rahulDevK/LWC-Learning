import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts'
export default class ApexImperativeWithParamDemo extends LightningElement {
    searchKey = ''
    accounts
    timer
    searchHandler(event) {
        this.searchKey = event.target.value
        window.clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.searchKey ? this.callApex() : this.accounts = '';
        }, 1000)
    }

    callApex() {
        findAccounts({ searchKey: this.searchKey }).
            then((result) => {
                this.accounts = result
            }).catch((error) => {
                console.log(error)
            })
    }
}