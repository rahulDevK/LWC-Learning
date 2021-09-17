import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.descriptionOne'
import DESCRIPTION_TWO from '@salesforce/label/c.descriptionTwo'
export default class CustomLabelsDemo extends LightningElement {
    COUNTRIES = {
        countryOne: DESCRIPTION_ONE,
        countryTwo: DESCRIPTION_TWO
    }
}