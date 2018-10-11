import { Programa } from '../programa/programa';
import { DataSource } from '@angular/cdk/table';
import { RestService } from 'src/app/rest.service';
import { Observable } from 'rxjs';


export class Encuesta {
    idEncuesta: number;
    programa: Programa;
    genero: string;
    edad: number;
    bebidaPref: string;
}

export class EncuestaDatasource extends DataSource <any> {
    constructor(private userService: RestService) {
      super();
    }
    connect(): Observable<Encuesta[]> {
      return this.userService.getEncuestas();
    }
    disconnect() {}
  }