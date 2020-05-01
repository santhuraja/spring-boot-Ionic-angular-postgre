import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'addschool', loadChildren: './addschool/addschool.module#AddSchoolPageModule' },
  { path: 'addstudent', loadChildren: './addstudent/addstudent.module#AddStudentPageModule' },
  { path: 'schoolsettings', loadChildren: './schoolsettings/schoolsettings.module#SchoolSettingsPageModule' },
  { path: 'studentsearch', loadChildren: './studentsearch/studentsearch.module#StudentSearchPageModule' },
  { path: 'marks', loadChildren: './marks/marks.module#MarksPageModule' },
  { path: 'exam', loadChildren: './exam/exam.module#ExamPageModule' },
  { path: 'attendance', loadChildren: './attendance/attendance.module#AttendancePageModule' },
  { path: 'routine', loadChildren: './routine/routine.module#RoutinePageModule' },
  { path: 'syllabus', loadChildren: './syllabus/syllabus.module#SyllabusPageModule' },
  { path: 'notice', loadChildren: './notice/notice.module#NoticePageModule' },
  { path: 'notice-view', loadChildren: './notice-view/notice-view.module#NoticeViewPageModule' },
  { path: 'class-timetable', loadChildren: './class-timetable/class-timetable.module#ClassTimetablePageModule' },
  { path: 'download', loadChildren: './download/download.module#DownloadPageModule' },
  { path: 'exam-result', loadChildren: './exam-result/exam-result.module#ExamResultPageModule' },
  { path: 'fees', loadChildren: './fees/fees.module#FeesPageModule' },
  { path: 'invoice', loadChildren: './invoice/invoice.module#InvoicePageModule' },
  { path: 'student', loadChildren: './student/student.module#StudentPageModule' },
  { path: 'student-info', loadChildren: './student-info/student-info.module#StudentInfoPageModule' },
  { path: 'transport', loadChildren: './transport/transport.module#TransportPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
