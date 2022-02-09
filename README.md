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

### L'interpolation (String interpolation)
L'interpolation est la manière la plus basique d'émettre des données issues de votre code TypeScript. 
Dans `appareil.component.ts`,  j'ai inséré le code suivant en haut de la déclaration de classe : 

![Capture d'image de la création de la variable appareilName](https://i.ibb.co/ZWwMjKD/cr-ationvariableappareil-Name.png)


Insérez le code suivant dans  `appareil.component.html` :

![Capture d'image de appreil.component.html](https://i.ibb.co/8KpCNPT/stringinterpolationappareil-Name.png)


La syntaxe pour l'interpolation : les doubles accolades  `{{ }}` exprime la variable `appareilName` '(ou toutes expressions Typescript valable : méthodes, fonctions) qui est instanciée dans le code Typescript. Içi la méthode `getStatus()` fonctionne de la même manière. Si on rafraîchit le navigateur, on obtient ceci :

![Capture d'image du navigateur](https://i.ibb.co/KjYz18x/navigateur1.png)

### La liaison par propriété (Property binding)
Cette technique permet :

- d'afficher le contenu de notre variable `appareilName`
- de modifier dynamiquement les propriétés d'un élément du DOM en fonction de données dans le TypeScript

Pour notre application, l'utilisateur **authentifié** aura la possibilité d'allumer tous les appareils. Pour ce faire, un bouton 'Tout allumer' sera désactivé par la propriété `disabled`. Cette propriété sera liée à une variable dans le code Typescript. La syntaxe du property binding est le double crochet `[]`.  

Pour simuler une authentification (valeur globale), il faut qu'on déclare une variable boolean dans `AppComponent`. Sa valeur sera modifiée au bout de 4 secondes par une méthode  `constructor` dans laquelle un timeout est mis en place. Cette modification de valeur de notre variable impactera la proriété du bouton. Le bouton sera activé quand cet appel d'API imaginaire sera effectué.   

![Capture d'image de variable isAuth](https://i.ibb.co/ZXcZL54/isAuth.png)


Ajoutez maintenant un bouton au template global `app.component.html `, en dessous de la liste d'appareils. Le point d'exclamation fait que le bouton est désactivé lorsque  `isAuth === false`.

![Capture d'image de bouton isAuth](https://i.ibb.co/52W1Pt6/boutonis-Auth.png)

La propriété de l'élément du DOM a été modifiée dynamiquement affectant ainsi son état. Le bouton est passé de l'état inactif à actif.

### Liaison à un événement (Event binding)
Jusque là, les données viennent du Typescript vers le Template. L'event binding vas dans le sens inverse. Les données en l'occurence des événements, viennent du Template HTML. On utilise les parenthèses  `()`  pour créer une liaison à un événement.

Revenons à notre application, notre bouton pour l'instant ne fait rien. Il s'active juste au bout de 4 secondes soit une simulation d'appel à un API d'authentification. Içi, je vais ajouté l'évenement `click` en propriété à mon bouton. De même, je crée une méthode `onAllumer()`   qui n'existe pas encore `app.component.ts`.



Ajoutons dans `app.component.ts` la méthode `onAllumer()`. Ici il sert juste à afficher le message dans la console:

![Capture d'image de la méthode onAllumer()](https://i.ibb.co/gvv5sbt/on-Allumer.png)

### Liaison à double sens (Two way binding)
Cette technique résulte de la combinaison de la property binding et event binding. Par conséquent, elle emploie le mélange des syntaxes : des crochets et des parenthèses  `[()]`.

Pour pouvoir utiliser le two-way binding, il faut importer  `FormsModule`  depuis  `@angular/forms`   dans votre application.  Vous pouvez accomplir cela en l'ajoutant à l'array  ``imports``  de votre  ``AppModule``  (sans oublier d'ajouter le statement  ``import``  correspondant en haut du fichier) : 

![Capture d'image de l'import FormsModule](https://i.ibb.co/LxSpsSV/twowaybindingimport.png)

J'ai tésté sur l'application en insérant un `<input>` dans `appareil.component.html`. Ici, j'utilise une directive `ngModel` pour le lier à `appareilName`. Je précise qu'il y a une partie sur [directives](#les-directives) plus loin dans ce document.

![Capture d'image de l'input](https://i.ibb.co/yQk7Wss/input.png)

Dans le navigateur, si vous modifiez le nom `<input>`, le contenu du  titre `<h4>` change.  Il est important de souligner que chaque instance du component  `AppareilComponent`  est entièrement indépendante une fois créée : le fait d'en modifier une ne change rien aux autres.

### Propriété personnalisée

L'intérêt de la création des propriétés personnalisées (ou événement) est de pouvoir transmettre des données depuis l'extérieur vers un component. Il faut utiliser le décorateur  `@Input()` et ne pas définir de valeur stricte à la variable lors de sa déclaration. Mais au préalable, il faut importé `input` depuis `@angular/core` dans `appareil.component.ts` en haut du fichier.  

Testons sur notre applications des appareils élétriques. 

![Capture d'image du décorateur](https://i.ibb.co/qd2F9B9/input.png)

Vous pouvez également créer une propriété pour régler l'état de l'appareil.

![Capture d'image du décorateur](https://i.ibb.co/bgMWhPq/decorateurinputetatappareil.png)


Voilà ce qui se passe, `@Input` a créé une propriété appareilName qu'on pourra fixer sur la balise `<app-appareil>`:

![Capture d'image des propriétés perso](https://i.ibb.co/wLNpfw4/proprietepersonnalise.png)

C'est une première étape intéressante, mais ce serait encore plus dynamique de pouvoir passer des variables depuis  `AppComponent`  pour nommer les appareils. On peut imaginer une autre partie de l'application qui récupérerait ces noms depuis un serveur, par exemple.  Heureusement, vous savez déjà utiliser le property binding !

J'ouvre le fichier `app.component.ts` et j'instancie trois variable avec les noms des appareils :

![Capture d'image des trois variables](https://i.ibb.co/XycvSDz/troisvariable.png)

Maintenant, utilisez les crochets  `[]` pour lier le contenu de ces variables à la propriété du component dans `app.component.html` :

![Capture d'image des proprietes perso et property binding](https://i.ibb.co/xYMVvVK/proprietepersonnalisenometetat.png)

## Les Directives

Ce sont des instructions intégrées dans le DOM. On peut en créer ou uitilisé celles fournies avec ANGULAR. Elles sont précédés d'un `*` à l'utilisation.

### Les directives structurelles
Pour notre application, nous allons mettre place un témoin rouge qui ne s'affiche que si l'appareil est éteint. Pour cela il nous faut utiliser la directive structurelle `*ngIf`. Un component auquel on ajoute la directive  `*ngIf="condition"`  ne s'affichera que si la condition est "truthy" (elle retourne la valeur  true  où la variable mentionnée est définie et non-nulle), comme un statement  if  classique. Testons!

Dans le fichier `appreil.component.html`, j'ai ajouté une `<div>` (modifie la structure du document) avec `style` CSS et ma directive comme ceci :

![Capture d'image de ngIF](https://i.ibb.co/Dftypft/ngIf.png)

![Capture d'image de ngIFresult](https://i.ibb.co/McRcKyq/ng-IFresult.png)

Supposons que nous récuperons un `array` contenant les appareils et leurs états depuis un serveur. Pour l'instant, je vais créé cet `array` directement dans `app.component.ts` :

![Capture d'image de Array](https://i.ibb.co/P58Gsgd/array.png)

Chaque objet a une propriété `name` et une propriété `status`. J'utilise la deuxième directive structurelle `*ngFor="let appareil of appareils"`. Elle affiche une itération de l'objet `appareil` de l'array `appareils`. Après cette directive, j'utilise l'objet  `appareil`, à l'intérieur d'une balise HTML. Les propriétés  `name`  et  `status`  de cet objet sont passés par le property binding dans les propriétés de cet balise HTML qui sont notamments `appareilName` et `appareilStatus`.

![Capture d'image de ngFor](https://i.ibb.co/Dz7yZtk/ngFor.png)

### Les directives par attribut

Ces directives modifient dynamiquement le comportement d'un objet existant. Je cite `*ngModel` que j'ai utilisé en two way binding, `ngStyle`, `ngClass`.

Pour l'application, je veux utiliser `ngStyle` pour changer la couleur du texte suivant l'état de l'appareil, rouge si 'éteint' et vert si 'allumé'. Cette directive prend un objet JS de type `clé:valeur`. Le style est la clé à la quelle on donne une nouvelle valeur. Dans notre cas, je crée dans `appareil.component.ts` une fonction `getColor()` et la donne en valeur à mon style :

![Capture d'image de ngStyle](https://i.ibb.co/PwKGLzN/ngStyle.png)

La fonction retourne `green` si allumé, `red` si éteint.

![Capture d'image de ngStyle](https://i.ibb.co/zr3Ttsn/getColor.png)

On peut aller plus loin, modifions maintenant la couleur de la balise `<li>` pour lui donner les même couleurs que les textes selon l'état de l'appareil. J'utilise `ngClass` pour ça. Elle prend des `class` comme clé et une condition en valeur.

![Capture d'image de ngStyle](https://i.ibb.co/gJM4d5p/ngClass.png)

![Capture d'image de li colored](https://i.ibb.co/Tb2dqJK/licolored.png)

## Les Pipes
Les pipes prennent des données en input, les transforment, et puis affichent les données modifiées dans le DOM.  Il y a des pipes fournis avec Angular, et vous pouvez également créer vos propres pipes si vous en avez besoin.  Je vous propose de commencer avec les pipes fournis avec Angular. Pour ajouter un `Pipe` on utilise `|`. 

Ce que je vais faire c'est ajouter  à l'application la date de dernière mise à jour. J'utilise `DatePipe` qui analyse l'objet JS de type `Date` avec son encodage de base, le transforme et l'affiche sous la mise en forme que j'ai choisi.
J'ouvre mon fichier `app.component.ts`, je crée une variable `lastUpdate`. Je vais dans mon fichier `app.component.html`, j'y affiche la variable que je vient de créer dans un paragraphe.

![Capture d'image de lastUpdate](https://i.ibb.co/K06pTYV/last-Update.png)

![Capture d'image de lastUpdatehtml](https://i.ibb.co/kBbnxFn/last-Updatehtml.png)

L'objet Date est crée, mettons le en forme avec DatePipe. Angular permet de paramétrer DatePipe avec un argument de formatage comme suit : `| date : 'short'` :

![Capture d'image de dateshort](https://i.ibb.co/7b2N5HR/dateshort.png)

On peut même utiliser une chaîne de Pipes. L'image en dessous montre que j'ai paramétrer DatePipe sous un autre argument de formatage et j'ai affiché la date en majuscule.

![Capture d'image chainedepipes](https://i.ibb.co/7G6P3WK/chainedepipes.png)

### Pipe Async (AsyncPipe)

Je voulais parlé de `async` pour mettre en exergue sa grande utilité lors de gestion de données asynchrones, que l'application doit récupérer sur un serveur par exemples. Pour le moment nous ne communiquons pas avec un serveur, mais plus tard on le fera.

Je vais simuler cette communication avec une `Promise` qui sera résolue au bout de 2 secondes.

Je met à jour la variable  lastUpdate  comme suit :

```
  lastUpdate:any = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000);
   });

```
Si on enregistre et qu'on ouvre notre console, une erreur apparaît. En effet, au moment de générer le DOM,  `lastUpdate`  est encore une `Promise` et n'a pas de valeur modifiable par les pipes. 

![Capture d'image errorasync](https://i.ibb.co/6XqvccZ/errorasync.png)

Il nous faut ajouter `async` en début de chaîne pour dire à Angular d'attendre l'arrivée des données avant d'exécuter les autres pipes. 

![Capture d'image asyncPipe](https://i.ibb.co/J2cgnv6/async-Pipe.png)

Une petite parenthèse, je vous renvois au repository [exercice-blog-angular](https://github.com/TRAFANOHARANTSOA/exercice-blog-angular) pour voir l'application qui gère des posts de blog que j'ai réalisé suite à ce cours :sweat:.

Continuons avec 