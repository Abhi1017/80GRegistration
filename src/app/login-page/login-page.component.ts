import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'Jonaki Welfare Trust - 80G Registration Certificate Generator';
  username: any;
  password: any;
  requiredUsername = 'Admin';
  requiredPassword = 'JonakiAdmins@5050';
  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username && this.username.length > 0 && this.username == this.requiredUsername && this.password && this.password.length > 0 && this.password == this.requiredPassword) {
      Swal.fire({
        title: 'Success!',
        text: 'You have successfully logged in!!',
        confirmButtonText: 'Continue'
      }).then(result => {
        if (result.value) {
          Swal.close();
          this.router.navigateByUrl("/DonorData");
        }
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter correct credentials!!',
        confirmButtonText: 'Back'
      }).then(result => {
        if (result.value) {
          Swal.close();
        }
      });
    }
  }

}
