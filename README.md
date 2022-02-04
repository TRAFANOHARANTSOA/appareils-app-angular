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