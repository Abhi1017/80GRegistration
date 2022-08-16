import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {
  trustName = 'JONAKI WELFARE TRUST';
  address = '30, Madhusudhan Pal Chowdhury 1st bye lane, Howrah - 711101';
  regNo = 'IV - 573/2022';
  darpan = 'WB/2022/0319559';
  twelveAreg = 'AAETJ2477NE20221';
  eightyGreg = 'AAETJ2477NF20221';
  pan = 'AAETJ2477N';
  contactNo = 9674235050;
  cerRecp = 'Donor';
  donorName = '';
  donorEmail = '';
  donorPan = '';
  date = '';
  recpNo = 'JWT/IV-573/2022/';
  mode = '';
  transactionId = '';
  amount = 0;
  datePayment = '';
  isformShown = true;
  amountInWords = '';

  constructor() { }

  ngOnInit(): void {
  }
  amountChanged(event:any) {
    console.log(event);
    if (event && event > 0) {
      this.amountInWords = 'One thousand one';
    }
  }
  
  
  public downloadAsPDF() {
    this.isformShown = false;
    // window.print();
    setTimeout(() => {
      window.print();
      this.isformShown = true;
    }, 100);

    return; 
  }

}
