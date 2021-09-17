import { LightningElement } from 'lwc';
import CITY_IMAGES from '@salesforce/resourceUrl/city_london_images'

export default class StaticImagesResources extends LightningElement {
    cityImage1 = CITY_IMAGES + '/London1.jpg'
    cityImage2 = CITY_IMAGES + '/London2.jpg'
}