import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelersDashboardComponent } from './travelers-dashboard/travelers-dashboard.component';
import { HostsDashboardComponent } from './hosts-dashboard/hosts-dashboard.component';

const routes: Routes = [
  { path: '', component: HostsDashboardComponent },
  { path: 'hosts', component: HostsDashboardComponent },
  { path: 'travelers', component: TravelersDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
