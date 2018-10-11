import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Encuesta } from '../models/encuesta/encuesta.model';
import { Programa } from '../models/programa/programa';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-encuesta-form',
  templateUrl: './encuesta-form.component.html',
  styleUrls: ['./encuesta-form.component.css']
})
export class EncuestaFormComponent implements OnInit {
  formEncuesta: FormGroup;
  products: any = [];
  private encuesta: Encuesta;
  private programa: Programa;
myGroup;
  constructor(public rest: RestService, private fb: FormBuilder) {
    this.encuesta = new Encuesta();
    this.programa = new Programa();
  }

  ngOnInit() {
  this.createForm();
  }



  getPreferenciaGaseosa() {
    this.rest.preferenciaGaseosa().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

  addEncuesta(encuesta: Encuesta){
    this.rest.crearEncuesta(encuesta).subscribe((response) => {
      console.log(response);
  });
  }

  crearEncuesta(){
    
      this.encuesta.bebidaPref = this.formEncuesta.get('bebidaPref').value;
      this.encuesta.genero = this.formEncuesta.get('genero').value;
      this.encuesta.edad = this.formEncuesta.get('edad').value;
      this.programa.id = this.formEncuesta.get('programa').value;
      this.encuesta.programa = this.programa;
      this.addEncuesta(this.encuesta);
    
  }

  createForm() {
    this.formEncuesta = this.fb.group({
      bebidaPref: [undefined, Validators.required],
      genero: [undefined, Validators.required],
      edad: [undefined, Validators.required],
      programa: [undefined, Validators.required]
    });
  }

  limiteEncuestas () {
    this.rest.encuestasRealizadas().subscribe((data: {}) => {
      if (data < 10) {
        this.crearEncuesta();
      } else {
        window.alert('Se ha alcanzado el máximo numero de registros')
      }
    });
  }
}
