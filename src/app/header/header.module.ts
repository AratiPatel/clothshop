import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/material/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
