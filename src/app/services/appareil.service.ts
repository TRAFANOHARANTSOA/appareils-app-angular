export class AppareilService {
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

      switchOnAll(){
        for(let appareil of this.appareils)
        appareil.status = 'allumé'
      }

      switchOffAll(){
        for(let appareil of this.appareils)
        appareil.status = 'éteint'
      }
}