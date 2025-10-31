import { LightningElement, wire } from 'lwc';
import getRecords from '@salesforce/apex/FetchAccountValues.FetchAccountValues';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
import SLA from '@salesforce/schema/Account.SLA__c';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import PARENT_ACCOUNT from '@salesforce/schema/Account.ParentId';
import EXPIRATION_DATE from '@salesforce/schema/Account.ExpirationDate__c';
import LOCATION from '@salesforce/schema/Account.NumberOfLocation__c';
import DESCRIPTION from '@salesforce/schema/Account.Description';
import { createRecord } from 'lightning/uiRecordApi';

export default class NewUiForm extends LightningElement {
  result;
  finalResult = [];
  check;
  value = 'Choose Value';
  radiobuttonoptions;
  accountname;
  slaexpirationdate;
  radiobutton;
  richtext;
  allValid = false;
  
  val = 0;
  // To get the data from apex class for combobox
  @wire(getRecords) wiredAccount({error,data}){
    if(data){
       
        this.result = data;
        console.log(this.result);
     this.finalResult =  data.map((item)=>{
            return {
                label:item.Name,
                value:item.Id
            }
        });
        
        
        
    }
    else if(error){
    }
   
    
  }
  // To get the object information for picklist
  @wire(getObjectInfo, { objectApiName: ACCOUNT }) accountdetails
  
  // To get the picklist values
  @wire(getPicklistValues, {
      recordTypeId: '$accountdetails.data.defaultRecordTypeId',
      fieldApiName: SLA
    }) ricklistvalues({data,error}){
    if(data){
      this.check = data;
      
      console.log('This is the result',this.check.values);
      this.radiobuttonoptions = this.check.values.map((item)=>{
        return {
            label:item.label,
            value:item.value
        }
    })
  }
    else if(error){
      console.log('This is the error',error);
    }
  }
  // To get the values from combobox
  handleChangeParentAccount(event){
    this.value = event.detail.value;
  }
//  To get the values from Account Field
  handleChangeAccount(event){
    this.accountname = event.detail.value;
  }
//  To get the values from SLA Expiration Date Field
  handleChangeSLAExpirationDate(event){
    this.slaexpirationdate = event.detail.value;
  }
//  To get the values from Radio Button Field
  handleChangeRadio(event){
    this.radiobutton = event.detail.value;
  }
//  To get the values from Slider Field
  handleChangeSlider(event){
    this.slider = event.detail.value;
  }

//   To get the values from Rich Text Field
  handleChangeRichText(event){
    this.richtext = event.detail.value;
  }

  // Save the data
  handleSave(event){
    // To collect the input for checking the validity
    const inputs = this.template.querySelectorAll('lightning-input',
    'lightning-radio-group',
    'lightning-slider',
    'lightning-input-rich-text');
    inputs.forEach(input => {
      if(!input.checkValidity()){
        this.allValid = false;
      }
      else{
        this.allValid = true;
      }
    });

    if(!this.allValid){
      return;
    }
    // To save the record using create Record
    else{
    const fields = {};
    fields[ACCOUNT_NAME.fieldApiName] = this.accountname;
    fields[PARENT_ACCOUNT.fieldApiName] = this.value;
    fields[EXPIRATION_DATE.fieldApiName] = this.slaexpirationdate;
    fields[LOCATION.fieldApiName] = this.slider;
    fields[DESCRIPTION.fieldApiName] = this.richtext;
    fields[SLA.fieldApiName] = this.radiobutton;
    const recordInput = { apiName: ACCOUNT.objectApiName, fields };
    createRecord(recordInput)
    .then(account => {
      console.log('Account created with id: ', account.id);
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }

  }
  
}
