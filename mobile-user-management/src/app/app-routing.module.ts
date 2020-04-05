import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'addschool',
    loadChildren: './addschool/addschool.module#AddSchoolPageModule'
  },
  {
    path: 'addstudent',
    loadChildren: './addstudent/addstudent.module#AddStudentPageModule'
  },
  {
    path: 'schoolsettings',
    loadChildren: './schoolsettings/schoolsettings.module#SchoolSettingsPageModule'
  },
  {
    path: 'studentsearch',
    loadChildren: './studentsearch/studentsearch.module#StudentSearchPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'addschool', loadChildren: './addschool/addschool.module#AddSchoolPageModule' },
  { path: 'addstudent', loadChildren: './addstudent/addstudent.module#AddStudentPageModule' },
  { path: 'schoolsettings', loadChildren: './schoolsettings/schoolsettings.module#SchoolSettingsPageModule' },
  { path: 'studentsearch', loadChildren: './studentsearch/studentsearch.module#StudentSearchPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
