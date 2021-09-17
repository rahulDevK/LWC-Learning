import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import redererTamplate from './redererMethod.html'
export default class RedererMethod extends LightningElement {
    selectedTemplate

    render() {
        return this.selectedTemplate === 'Sign Up' ? signUpTemplate :
            this.selectedTemplate === 'Sign In' ? signInTemplate :
                redererTamplate;
    }

    handleRender(event) {
        this.selectedTemplate = event.target.label;
        console.log(this.selectedTemplate);
    }
}