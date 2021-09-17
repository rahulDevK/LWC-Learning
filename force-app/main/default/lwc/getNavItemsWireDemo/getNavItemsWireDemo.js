import { LightningElement, wire } from 'lwc';
import { getNavItems } from 'lightning/uiAppsApi'
export default class GetNavItemsWireDemo extends LightningElement {
    @wire(getNavItems, { pageSize: 30 })
    loadNavItems({ data, error }) {
        if (data) {
            console.log(data)
        } else {
            console.log(error)
        }
    }
}