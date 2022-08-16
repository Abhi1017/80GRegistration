import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

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
  a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
  b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

  constructor() { }

  ngOnInit(): void {
  }

inWords (num:any) {
    if ((num = num.toString()).length > 9) return 'overflow';
   let n:any = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) + 'Rupees only ' : '';
    return str;
}
  public downloadAsPDF() {
    if(this.donorName !== '' || this.donorEmail !== ''  || this.donorPan !== '' || this.date !== '' || this.mode !== '' || this.datePayment !== '' || this.transactionId !== '' || this.amount !== 0 ){
      this.isformShown = false;
      setTimeout(() => {
        window.print();
        this.isformShown = true;
      }, 1000);
      return; 
    } else{
      Swal.fire({
        title: 'Error!',
        text: 'Please enter all details',
        confirmButtonText: 'Ok'
      }).then(result => {
        if (result.value) {
          Swal.close();
        }
      });
    }

  }

}
