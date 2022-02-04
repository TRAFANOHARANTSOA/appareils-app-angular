# APPAREILS-APP-ANGULAR
Toujours dans le cadre de mon auto-formation sur Angular, j'ai décidé de documenter mon parcours. Je livre içi toutes les étapes développement d'une application simple de gestion de l'état des appareils domestiques. Je rappel que ce cours existe sur openclassroom.

## Créer un nouveau projet
J'ai commencé par créer un projet que j'ai dénommé **appareils-app-angular**.

`ng new mon-projet-angular --style=scss --skip-tests=true`

N'oubliez pas d'intégrer Bootstrap à votre projet.
Depuis le dossier  appareils-app-angular , télécharger Bootstrap pour l'intégrer au package.json du projet :

`npm install bootstrap@<version> --save`

Ouvrez le fichier  angular.json  du dossier source de votre projet.  Dans "architect/build/options", modifiez l'array  styles  comme suit :

![Capture d'image de l'intégration de Bootstrap dans le projet](https://i.ibb.co/k8M3Dr0/integratebootstrap.png)

Et pout términer, lancer le serveur : 
`ng serve`

## Créer un premier component

`ng generate component appareils`

- Vérifier bien dans `app.module.ts` que le CLI a ajouté le component `appareilsComponent` dans l'array `declarations` et le statement Import en haut du fichier.

![Capture d'image de la déclaration du component appareils dans app.module.ts](https://i.ibb.co/jTjWSCC/componentdeclaration.png)

- Vérifier dans `appareils.component.ts`, le CLI a créé un selecteur `app-appareils`, nous l'insérerons dans notre code pour utiliser ce component. 

![Capture d'image de la création du selector dans app.module.ts](https://i.ibb.co/vLr00Sy/componentselector.png)

- Insérer dans une balise HTML comme suit : 

![Capture d'image de l'insértion dans app.component.html](https://i.ibb.co/T18QBXF/insertselectorinhtml1.png)