import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;
  appareils: any[] |undefined;
  
  lastUpdate:any = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000);
   });
  
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
      );
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onAllume(): any{
    this.appareilService.switchOnAll();
  }
  onEteindre(): any {
    if(confirm('Voulez vous confirmez l\'extinction des appareils')){
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
    
  }

}

