import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
     CommonModule,
     RouterModule.forChild(DashboardRoutes),
     FormsModule,
     ReactiveFormsModule
   ],
  declarations: [DashboardComponent],
  providers: []
})

export class DashboardModule {}
