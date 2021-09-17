import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
export default class GetPicklistValuesDemo extends LightningElement {
    industryValue
    industryOptions
    typeOptions
    typeValue

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectDetails

    @wire(getPicklistValues, { recordTypeId: '$objectDetails.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    loadIndustryPicklistValues({ data, error }) {
        if (data) {
            this.industryOptions = [...this.modifyOptions(data)]
        } else {
            console.log(error)
        }
    }

    handleIndustryChange(event) {
        this.industryValue = event.detail.value;
    }

    @wire(getPicklistValues, { recordTypeId: '$objectDetails.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD })
    loadTypePicklistValues({ data, error }) {
        if (data) {
            this.typeOptions = [...this.modifyOptions(data)]
        } else {
            console.log(error)
        }
    }

    handleIndustryChange(event) {
        this.industryValue = event.detail.value;
    }

    handleTypeChange(event) {
        this.typeValue = event.detail.value;
    }

    modifyOptions(data) {
        return data.values.map(item => ({ label: item.label, value: item.value }))
    }
}