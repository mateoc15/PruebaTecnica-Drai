import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Encuesta } from '../models/encuesta/encuesta';
import { Programa } from '../models/programa/programa';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EncuestaDatasource } from '../models/encuesta/encuesta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  dataSource = new EncuestaDatasource(this.rest);
  displayedColumns = ['bebidaPref', 'edad', 'genero', 'programa.nombreProg'];
  formLogin: FormGroup;
  isLoggedIn = false;
  numeroEncuestas;
  numeroPersonasGaseosa;
  bebidaPreferida;
  menosParticipacion;

  
  private  encuestas:  Array<Encuesta> = [];
  constructor( public rest: RestService, public fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.encuestasRealizadas();
    if (this.numeroEncuestas !== 0 ) {
      this.preferenciaGaseosa();
      this.getEncuestas();
      this.preferidaBebida();
      this.programaMenosParticipacion();
    }
     }

     login() {
       this.usuarioExiste(this.formLogin.get('usuario').value, this.formLogin.get('contrasena').value);
     }

     getEncuestas() {
      this.encuestas = [];
      this.rest.getEncuestas().subscribe((data: Array<Encuesta>) => {
        this.encuestas = data;
        console.log(this.encuestas);
      });
    }

     usuarioExiste(usuario: string, contra: string) {
      this.rest.usuarioExiste(usuario, contra).subscribe((data: {}) => {
        console.log(data);
        if (data === 1) {
          this.isLoggedIn = true;
        }
      });
    }

    encuestasRealizadas() {
      this.rest.encuestasRealizadas().subscribe((data: {}) => {
        console.log(data);
        this.numeroEncuestas = data;
      });
    }

    preferenciaGaseosa(){
      this.rest.preferenciaGaseosa().subscribe((data: {}) => {
        console.log(data);
        this.numeroPersonasGaseosa = data;
      });
    }

    preferidaBebida() {
      this.rest.bebidaPreferida().subscribe((data: {}) => {
        console.log(data);
        this.bebidaPreferida = [];
        this.bebidaPreferida = data;
      });
    }

    programaMenosParticipacion(){
      this.rest.programaMenosParticipacion().subscribe((data: {}) => {
        console.log(data);
        this.menosParticipacion = [];
        this.menosParticipacion = data;
      });
    }
     createForm() {
      this.formLogin = this.fb.group({
        usuario: [undefined, Validators.required],
        contrasena: [undefined, Validators.required]
      });
    }

    


}
