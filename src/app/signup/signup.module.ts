import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import {  SharedModule } from '../shared/material/shared.module';


const signuproute: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
];

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(signuproute)],
})
export class SignupModule {}
