import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaintingComponent } from './painting/painting.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'painting',
    canActivate: [AuthGuard],
    component: PaintingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // order is important
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }