import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelersDashboardComponent } from './travelers-dashboard/travelers-dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'travelers', component: TravelersDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
