import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/module/shared.module';
import { MemberListComponent } from './member-list.component';

const routers: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [MemberListComponent]
})
export class MemberListModule { }
