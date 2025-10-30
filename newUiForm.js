import { LightningElement, wire } from 'lwc';
import getRecords from '@salesforce/apex/FetchAccountValues.FetchAccountValues';
export default class NewUiForm extends LightningElement {
  result;
  finalResult = [];
  value = 'Choose Value';
  @wire(getRecords) wiredAccount({error,data}){
    if(data){
       // console.log(data);
        this.result = data;
        console.log(this.result);
     this.finalResult =  data.map((item)=>{
            return {
                label:item.Name,
                value:item.Id
            }
        });
       
        console.log(this.finalResult);
        
    }
    else if(error){
    }
    
  }
  handleChange(event){
    this.value = event.detail.value;
  }
}