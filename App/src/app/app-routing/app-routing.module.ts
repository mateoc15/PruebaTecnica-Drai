import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaFormComponent } from '../encuesta-form/encuesta-form.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { ResultadosEncuestaComponent } from '../resultados-encuesta/resultados-encuesta.component';

const routes: Routes = [
  {
        path: 'result',
        component: ResultadosEncuestaComponent
  },
  {
        path: '',
        component: EncuestaFormComponent
  },
  {
        path: 'login',
        component: AdminLoginComponent
  },
  {
    path: 'form',
    component: EncuestaFormComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }