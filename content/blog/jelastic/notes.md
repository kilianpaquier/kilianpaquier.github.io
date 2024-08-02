## Usage

Pour un premier test de déploiement springboot (j'ai pas choisi la plus rapide des applications à se lancer #java), le déploiement est un peu long !

Une fois un serveur applicatif déployé (voir image 01-env-jelastic), un accès rapide à la consommation est disponible sous forme de graphe (là où sur kubernetes, on aurait besoin d'un grafana pour reporter la consommation graphique).

Il y a quelques accès utile bien visible (les logs, les statistiques de consommation, l'accès FTP au conteneur, l'accès SSH, et un point d'entrée sur les règlages).

Il est possible de dupliquer un noeud assez rapidement.

Il y a des alertes par défaut plutôt intéressantes sur la charge, ce qui envoie des mails. Ces alertes sont éditables, supprimables. On peut aussi en créer de nouvelles (voir image 02-env-jelastic + 03-env-jelastic).

Si un domaine propriétaire est disponible sur la même plateforme, il est possible de le lier assez rapidement (voir image 04-env-jelastic).

Le redimensionnement horizontal est simple à configurer (voir image 05-env-jelastic).

Plutôt intéressant, on peut accéder au sein d'un environnement à l'URL de l'environnement (via ingress) tout comme à chaque noeud de l'environnement (via ingress).

Au sein d'un environnement, pour sa configuration, il est possible de régler les variables globale, les ports ouverts, les volumes à monter (06-env-jelastic).

Il est aussi possible de lier une liste de dépôt Git/SVN pour les applicatifs à déployer (voir 07-env-jelastic).

Lors du déploiement d'un environnement, c'est plutôt intéressant car on peut configurer l'applicatif, la base de données (SQL & NoSQL) à déployer, le cache mémoire, plusieurs autres applicatifs. Il est aussi possible de déployer un "équilibrage" (voir 08-env-jelastic et 09-env-jelastic).

Le visuel final est assez intuitif (voir 10-env-jelastic) et on peut gérer, sur le serveur applicatif, même une fois déployé les dépôts métier Git/SVN à déployer en complément (voir 11-env-jelastic).

Je suis pas expert Cloud ni PaaS, mais ce qui a l'air intéressant c'est concernant le déploiement d'applicatifs précis. Au final, je n'ai pas l'impression qu'on déploie une image Docker buildé d'un applicatif, mais plutôt qu'un serveur va tourner et on va venir y déployer des applicatifs (voir 12-env-jelastic).

On est sur un fonctionnement différent de Kubernetes, où on utilise la pipeline GitLab, GitHub, CDS, etc. pour aller déployer un élément. Ici c'est le serveur qui va aller chercher le contenu à déployer. En plus on peut ajouter des Hooks avec du code avant et après déployement d'un dépôt Git/SVN.

Il a l'air aussi d'être possible de gérer très facilement des déploiements Blue / Green (une partie des utilisateurs sur une nouvelle version pour tester et une autre sur la version stable actuelle): https://www.virtuozzo.com/application-platform-docs/blue-green-deploy/.

C'est plutôt malin, car pour configurer le switch entre deux versions de production et expérimenter sur seulement une partie des utilisateurs, l'interface est hyper intuitive et il n'y a pas besoin d'être un expert en configuration Kubernetes pour lier deux environnements (voir image 14-env-jelastic).

La création d'environnements est relativement longue, mais comme un environnement ne va pas être redémarré, modifié tous les matins, c'est persque pas dérangeant. Puisqu'ici une fois l'environnement lancé, c'est Jelastic qui s'occupe d'aller chercher les dépôts Git à ajouter à son déploiement (voir la section plus basse).

Ce qui est aussi pas mal, c'est qu'on peut regrouper les environnements ensembles, on peut donc imaginer avec trois/quatres environnements applicatifs (un Java, un Golang, etc...) qui seront pour la production, la préproduction, l'intégration (voir 13-env-jelastic).

Une des problématiques reste que Jelastic Cloud n'est déployable et utilisable que sur un nombre limité d'hébergeurs, il n'est pas possible comme Kubernetes (qui reste un CaaS et pas un PaaS), open source, de la déployer soi-même.

Autre point intéressant, un environnement peut être importé et créé de la même manière que les fichiers Kubernetes: https://www.virtuozzo.com/application-platform-docs/environment-import/.

Petit bémol, si un déploiement met trop de temps à s'exécuter, toutes les autres actions sont bloquées sur l'environnement (c'est logique), mais impossible de forcer l'arrêt de l'action bloquante trop longue.

Sur le même principe que Kubernetes, une CLI est disponible et permet d'accéder aux différentes ressources de la plateforme: https://www.virtuozzo.com/application-platform-docs/cli/?lang=fr.

Petit bémol, un seul applicatif ne peut être déployé par serveur au sein d'un environnement.

Petit avantage, une fois une liste de dépôts configurés, il est très facile de passer d'une dépôt à un autre ou d'une branche à une branche.

Un des autres atouts, en tout cas sur ce qui est proposé sur Infomaniak, dans la même dynamique que DigitalOcean, c'est le marketplace pour déployer des serveurs applicatifs tout en un sans avoir à passer de longues heures à configurer.

Petit bémol, parfois il n'est pas possible de déployer un applicatif sur un serveur d'un environnement. Je n'ai cependant pas pu trouver les conditions nécessaires pour débloquer l'action.

Point positif, les nombreuses documentations permettant de bien comprendre et appliquer pas à pas les configurations par type d'applicatif (Java, Node.js, BDD, etc.).

Autre bémol, j'ai l'impression que le fetch de nouvelles branches est un peu capricieux. A plusieurs reprises une branche existante dans GitLab était indiquée comme non existante dans Jelastic.