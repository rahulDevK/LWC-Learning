import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
export default class WiregetObjectInfoDemo extends LightningElement {
    allObjects = [ACCOUNT_OBJECT, CONTACT_OBJECT]
    objectDetails
    allObjectDetails
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    getObjectDetails({ data, error }) {
        if (data) {
            this.objectDetails = data;
        } else {
            console.log(error)
        }
    }


    @wire(getObjectInfos, { objectApiNames: '$allObjects' })
    getAllObjectDetails({ data, error }) {
        if (data) {
            this.allObjectDetails = data;
        } else {
            console.log(error)
        }
    }
}