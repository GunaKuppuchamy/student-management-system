import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'Principal', component:PrincipalComponent},
    {path:'Teacher', component:TeacherComponent},
    {path:'Student', component:StudentComponent}

];
