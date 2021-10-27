import { Component, Directive, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() 
  appareilName:string | undefined;

  @Input()
  appareilStatus:string | undefined;

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé'){
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
    return ''; //il faut évidement que quelque chose se passe si c'est ni allumé ni éteint
  }
}
