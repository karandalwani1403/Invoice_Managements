import { LightningElement } from 'lwc';

export default class LightningInput extends LightningElement {
  handleInputFocus(event) {
    const value = event.target.value;
    if(value===''||value==null||value===undefined)
    {
      event.target.variant = "label-hidden";
       const error = this.template.querySelector("error")
    }
    else{
      event.target.variant = "";
    }
    console.log('check class list ', value);
}
}