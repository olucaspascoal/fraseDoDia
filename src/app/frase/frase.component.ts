import { Component, OnInit } from '@angular/core';
import { FraseService } from '../services/frase.service';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {
  body: HTMLElement[] | undefined;

  public count = 0;
  frase: HTMLElement[] | undefined;

  autor: HTMLElement[] | undefined;
  constructor(public fraseService: FraseService) { }

  ngOnInit(): void {
  }

  changeColor(){
    this.body = Array.from(document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>)
    this.frase = Array.from(document.getElementsByTagName('h2') as HTMLCollectionOf<HTMLElement>)
    this.autor = Array.from(document.getElementsByTagName('a') as HTMLCollectionOf<HTMLElement>)

    this.frase.forEach((element) => {
      if(this.count % 2 == 0){
        element.style.color = '#181818';
      } else {
        element.style.color = '#ECECF3';
      }
    });
    this.autor.forEach((element) => {
      if(this.count % 2 == 0){
        element.style.color = '#181818';
      } else {
        element.style.color = '#ECECF3';
      }
    });

    // this.body.forEach((element) => {
    //   if(this.count % 2 == 0){
    //     element.style.backgroundColor = '#ECECF3';
    //     this.count += 1
    //   } else {
    //     element.style.backgroundColor = '#181818';
    //     this.count += 1
    //   }
    // });
    this.mudar(this.body, '#ECECF3', '#181818')
  }


  mudar(param: any[], color1: any, color2: any){
    param.forEach((element) => {
      if(this.count % 2 == 0){
        element.style.backgroundColor = color1;
        this.count += 1
      } else {
        element.style.backgroundColor = color2;
        this.count += 1
      }
    });
  }
}
