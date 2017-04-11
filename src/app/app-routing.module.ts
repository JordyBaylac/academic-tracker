import { UserRoutes } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicMouleActivator } from './guards/barrel';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { // lazy loading this with app/path#ModuleName
    path: 'academic',
    loadChildren: 'app/academic/academic.module#AcademicModule',
    canActivate: [AcademicMouleActivator]
  },
  { path: 'user',  children: UserRoutes },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
