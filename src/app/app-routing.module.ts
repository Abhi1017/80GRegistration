import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPageComponent } from './input-page/input-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "DonorData", component: InputPageComponent },
  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
