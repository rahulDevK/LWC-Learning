import { LightningElement } from 'lwc';
import hasPermission from '@salesforce/userPermission/ViewAllData'
import hasCustomPermission from '@salesforce/customPermission/show_details'
export default class CheckPermissionDemo extends LightningElement {
    get isPermissionAvailable() {
        return hasPermission ? 'Your Profile has user permission' : 'Your Profile does not have user permission';
    }

    get isCustomPermissionAvailable() {
        return hasCustomPermission ? 'Your Profile has custom permission' : 'Your Profile does not have custom permission';
    }
}