import { create } from '@angular/language-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Encuesta } from './models/encuesta/encuesta';



@Injectable({
  providedIn: 'root'
})
export class RestService {
  API_URL  =  'http://192.168.56.1:8034';
  constructor(private http: HttpClient) { }



private extractData(res: Response) {
  let body = res;
  return body || { };
}

getEncuestas(): Observable<Encuesta[]>{
  return  this.http.get<Encuesta[]>(this.API_URL + '/encuesta/all');
}

crearEncuesta(encuesta) {
  return  this.http.post(this.API_URL + '/encuesta/addencuesta', encuesta);
}

preferenciaGaseosa() {
  return  this.http.get(this.API_URL + '/encuesta/preferenciagaseosa');
}

encuestasRealizadas(){
  return  this.http.get(this.API_URL + '/encuesta/numeroencuestas');
}

usuarioExiste(usuario: string, contra: string) {
  return  this.http.get(this.API_URL + '/admin?user=' + usuario + '&pass=' + contra);
}

bebidaPreferida() {
  return  this.http.get(this.API_URL + '/encuesta/bebidapreferida');
}

programaMenosParticipacion() {
  return  this.http.get(this.API_URL + '/encuesta/menosparticipacion');
}


}