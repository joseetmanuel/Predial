import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  endpoint: string;
  httpOptions: any;
  constructor(private http: HttpClient) {
    this.endpoint = 'http://189.204.141.199:1000/lee3';
    //  this.endpoint =  'http://localhost:1000/lee3';
  }

  post_datos(
    ddlLocalidades: number,
    ddlTipo: number,
    txtCuenta: string,
    txtApellido: string,
    esMoral: boolean
  ) {
    let url = this.endpoint + '?ddlLocalidades=';
    if (esMoral) {
      url =
        url +
        ddlLocalidades +
        '&ddlTipo=' +
        ddlTipo +
        '&txtCuenta=' +
        txtCuenta +
        '&txtApellido=' +
        txtApellido +
        '&esMoral=' +
        esMoral;
    } else {
      url =
        url +
        ddlLocalidades +
        '&ddlTipo=' +
        ddlTipo +
        '&txtCuenta=' +
        txtCuenta +
        '&txtApellido=' +
        txtApellido;
    }

    return this.http.get(url, this.httpOptions);
  }
}
