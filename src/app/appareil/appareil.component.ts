import { Component, Directive, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';


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

  @Input()
  indexOfAppareil: number | any;

  constructor(private appareilService: AppareilService) { }

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

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
}
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
}

}
