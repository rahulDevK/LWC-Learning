import { LightningElement } from 'lwc';
export default class ApexWireWithParamParent extends LightningElement {
    selectedType
    get typeOptions() {
        return [
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Customer - Channel', value: 'Customer - Channel' },
        ];
    }

    handleChange(event) {
        this.selectedType = event.detail.value
    }
}