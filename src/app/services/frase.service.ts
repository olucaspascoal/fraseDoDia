import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraseService {

  public fraseDia =  String;
  requisicao: any;

  constructor(private httpClient: HttpClient) {
    this.fraseAleatoria();
  }

  async fraseAleatoria() {
    this.requisicao = await firstValueFrom(this.httpClient.get<any>('https://api.adviceslip.com/advice'));
    // const requisicao = await this.httpClient.get<any>('https://api.adviceslip.com/advice').toPromise();

    this.fraseDia = this.requisicao.slip.advice;
  }
}
