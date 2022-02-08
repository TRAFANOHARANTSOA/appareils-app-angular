# APPAREILS-APP-ANGULAR
Toujours dans le cadre de mon auto-formation sur Angular, je documente içi les étapes de développement d'une application simple qui gère des appareils éléctriques. Elle vérifie l'état des appareils, s'ils sont allumés ou non. Des actions 'tout allumer' ou 'tout éteindre'  ou autres sont possibles. Je rappel que je me suis basé sur le cours d'Openclassroom.

## Créer un nouveau projet
J'ai commencé par créer un projet que j'ai dénommé **appareils-app-angular**.

`ng new mon-projet-angular --style=scss --skip-tests=true`

N'oubliez pas d'intégrer Bootstrap à votre projet.
Depuis le dossier  appareils-app-angular , télécharger Bootstrap pour l'intégrer au package.json du projet :

`npm install bootstrap@<version> --save`

Ouvrez le fichier  angular.json  du dossier source de votre projet.  Dans "architect/build/options", modifiez l'array  styles  comme suit :

![Capture d'image de l'intégration de Bootstrap dans le projet](https://i.ibb.co/RYy3Qzf/bootstrap.png)

Et pout términer, lancer le serveur : 
`ng serve`

## Créer un premier component
J'ai créé un component nommé appareil :

`ng generate component appareil`

- Vérifier bien dans `app.module.ts` que le CLI a ajouté le component `appareilComponent` dans l'array `declarations` et le statement Import en haut du fichier.

![Capture d'image de la déclaration du component appareil dans app.module.ts](https://i.ibb.co/p2vBD66/importappareilcomponent.png)

- Vérifier dans `appareil.component.ts`, le CLI a créé un selecteur `app-appareil`, nous l'insérerons dans notre code pour utiliser ce component. 

![Capture d'image de la création du selector dans app.module.ts](https://i.ibb.co/TtQMm9G/selectorappareilscomponent.png)

- Ouvrez `appareil.component.html`  (dans le nouveau dossier  appareil  créé par le CLI), supprimez le contenu, et entrez le code ci-dessous : 

![Capture d'image de l'insértion dans appareil.component.html](https://i.ibb.co/CMnpgzQ/appareil-component-html.png)

- Insérer le selector dans le fichier `app.component.html` dans une balise HTML comme suit : 

![Capture d'image de l'insértion dans app.component.html](https://i.ibb.co/3MM0ztV/selectorappareilsinhtml.png)


## Liaison des données (DATABINDING)

Angular permet une manipulation dynamique des éléments du DOM (Document Object Model : éléments HTML affiché par le navigateur) grâce à la liaison des données. 

Cette communication entre votre Typescript et le template HTML prend deux directions : 

- les informations venant de votre code (.ts) qui doivent être affichées dans le navigateur (.html), comme par exemple des informations que votre code (.ts) a **calculé ou récupéré sur un serveur**.  Les deux principales méthodes pour cela sont le **string interpolation** et le **property binding** ;

- les informations venant du template (.html)  qui doivent être gérées par le code (.ts) : l'utilisateur a rempli un formulaire ou cliqué sur un bouton, et il faut réagir et gérer ces événements.  On parlera de **event binding** pour cela.

- on parlera aussi de **two-way binding** ou **communication à double sens** dans certains cas notamment les formulaires.

### **L'interpolation (String interpolation) **
L'interpolation est la manière la plus basique d'émettre des données issues de votre code TypeScript. 
Dans `appareil.component.ts`,  j'ai inséré le code suivant en haut de la déclaration de classe : 

![Capture d'image de la création de la variable appareilName](https://i.ibb.co/v3yQsLL/cr-ationvariableappareil-Name.png)


Insérez le code suivant dans  `appareil.component.html` :

![Capture d'image de appreil.component.html](https://i.ibb.co/qDFSGCf/stringinterpolationappareil-Name.png)


La syntaxe pour l'interpolation : les doubles accolades  `{{ }}` exprime la variable `appareilName` '(ou toutes expressions Typescript valable : méthodes, fonctions) qui est instanciée dans le code Typescript. Si on rafraîchit le navigateur, on obtient ceci :

![Capture d'image du navigateur](https://i.ibb.co/KjYz18x/navigateur1.png)

### **La liaison par propriété (Property binding)**
Cette technique permet :

    - d'afficher le contenu de notre variable `appareilName`
    - de modifier dynamiquement les propriétés d'un élément du DOM en fonction de données dans le TypeScript

Pour notre application, l'utilisateur ==authentifié== aura la possibilité d'allumer tous les appareils.

