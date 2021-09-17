import { LightningElement } from 'lwc';

export default class GetLocationDemo extends LightningElement {
    getLocationFromBrowser() {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(`Getting the lattitude`)
            console.log(`Latitude : ${position.coords.latitude}`);
            console.log(`Longitude: ${position.coords.longitude}`);
        }, err => {
            console.warn(`ERROR(${err.code}): ${err.message}`)
        });
    }


    success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
}