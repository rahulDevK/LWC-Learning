import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesByRecordType extends LightningElement {
    industryOptions
    industryValue
    typeOptions
    typeValue
    ratingOptions
    ratingValue
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectDetails

    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectDetails.data.defaultRecordTypeId' })
    loadPicklistValues({ data, error }) {
        if (data) {
            this.industryOptions = [...this.generatePickLists(data.picklistFieldValues.Industry)]
            this.typeOptions = [...this.generatePickLists(data.picklistFieldValues.Type)]
            this.ratingOptions = [...this.generatePickLists(data.picklistFieldValues.Rating)]
        } else {
            console.log(error)
        }
    }

    generatePickLists(data) {
        return data.values.map(item => ({ label: item.label, value: item.value }))
    }

    handleChange(event) {
        const { name, value } = event.target
        if (name === 'Industry') {
            this.industryValue = value
        } else if (name === 'Type') {
            this.typeValue = value
        } else if (name === 'Rating') {
            this.ratingValue = value
        }
    }
}