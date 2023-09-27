//import { LightningElement, api, track, wire } from 'lwc';
//import getInvoicesSummary from '@salesforce/apex/InvoiceController.getInvoicesSummary';
// export default class IMS_Invoice_Status extends LightningElement {
  // @api recordId;
  // openInvoices;
  // overdueInvoices;
  // paidInvoices;

  // @wire(getInvoicesSummary, { accountId: '$recordId' })
  // wiredInvoicesSummary({ error, data }) {
  //   if (data) {
  //     this.openInvoices = data.openInvoices;
  //     this.overdueInvoices = data.overdueInvoices;
  //     this.paidInvoices = data.paidInvoices;
  //   } else if (error) {
  //     console.error(error);
  //   }
  // }
  export function sum(a, b){
  return a+b;
}


// }