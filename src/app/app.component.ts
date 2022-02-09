import { Component } from '@angular/core';
import { AppareilService } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
});

export class AppComponent {
  isAuth = false;
  
  lastUpdate:any = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000);
   });
  
  appareils=[
    {
      name:'Machine à laver',
      status:'éteint'
    },
    {
      name:'Télévision',
      status:'allumé'
    },
    {
      name:'Ordinateur',
      status:'allumé'
    }
    
  ];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
      );
  }
  onAllume(){
    console.log("On allume tout!");
  }
}
