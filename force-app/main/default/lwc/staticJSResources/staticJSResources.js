import { LightningElement } from 'lwc';
import CITY_IMAGES from '@salesforce/resourceUrl/city_london_images'
import MOMENT from '@salesforce/resourceUrl/moment_marathi_lib'
import ANIMATE from '@salesforce/resourceUrl/animate_css'
import { loadScript, loadStyle } from 'lightning/platformResourceLoader'
export default class StaticJSResources extends LightningElement {
    cityImage1 = CITY_IMAGES + '/London1.jpg'
    currentDate
    libLoaded
    //When loading only one Library
    /* renderedCallback() {
        if (!this.libLoaded) {
            loadScript(this, MOMENT + '/moment_marathi.js')
                .then(() => {
                    this.libLoaded = true;
                    this.showDate()
                }).catch(err => console.log(err))
        }
    } */

    // When loading mulitple libraries
    renderedCallback() {
        if (!this.libLoaded) {
            Promise.all([loadScript(this, MOMENT + '/moment_marathi.js'), loadStyle(this, ANIMATE + '/animate/animate.min.css')])
                .then(() => {
                    this.libLoaded = true
                    this.showDate()
                }).catch(err => console.log(err))
        }

    }
    showDate() {
        moment.locale('mr');
        this.currentDate = moment().format('LLL');
    }
}